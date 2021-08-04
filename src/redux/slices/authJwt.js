import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { apiList, headers } from 'src/constants';
import { startLoading, endLoading, getSuccess } from 'src/redux/slices/error';
import { apiMessage } from 'src/constants/message';
import { setContry } from 'src/redux/slices/orders';
// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  user: {},
  accessToken: null
};

const slice = createSlice({
  name: 'authJwt',
  initialState,
  reducers: {
    // INITIALISE
    getInitialize(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },

    // LOGIN
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.user.accessToken;
    },

    // REGISTER
    registerSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.user.accessToken;
    },

    // UPDATE PROFILE
    updateProfileSuccess(state, action) {
      state.user = action.payload.user;
    },

    // UPLOAD PROFILE IMAGE
    updateProfileImageSuccess(state, action) {
      state.user = action.payload.user;
    },

    // UPDATE PROFILE
    updatePasswordSuccess(state, action) {},

    // LOGOUT
    logoutSuccess(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (accessToken, userData) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(userData));
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

// ----------------------------------------------------------------------
export function login({ email, password }) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(
      apiList.login,
      {
        email,
        password
      },
      {
        headers: headers.applicationJson
      }
    );
    const { accessToken } = response.data;
    setSession(accessToken, response.data);
    dispatch(slice.actions.loginSuccess({ user: response.data }));
    dispatch(setContry({ id: response.data.countryId }));
    dispatch(endLoading());
  };
}

// ----------------------------------------------------------------------
export function register({
  email,
  password,
  firstName,
  lastName,
  referrerCode,
  receiveLetters
}) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(
      apiList.register,
      {
        email,
        password,
        firstName,
        lastName,
        referrerCode,
        receiveLetters
      },
      {
        headers: headers.applicationJson
      }
    );
    const { accessToken } = response.data;
    setSession(accessToken, response.data);
    dispatch(slice.actions.registerSuccess({ user: response.data }));
    dispatch(endLoading());
  };
}

// ----------------------------------------------------------------------
export function updateProfile(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    await axios.post(apiList.updateProfile, data, {
      headers: headers.applicationJson
    });
    let temp = JSON.parse(window.localStorage.getItem('user'));
    temp.firstName = data.firstName;
    temp.lastName = data.lastName;
    temp.phoneNumber = data.phone;
    localStorage.setItem('user', JSON.stringify(temp));
    dispatch(slice.actions.updateProfileSuccess({ user: temp }));
    dispatch(endLoading());
  };
}

// ----------------------------------------------------------------------
export function resetPassword(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(apiList.changePassword, data, {
      headers: headers.applicationJson
    });
    dispatch(slice.actions.updatePasswordSuccess(response));
    dispatch(endLoading());
  };
}

// ----------------------------------------------------------------------
export function updateProfileImage(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(apiList.updateProfileImage, data, {
      headers: headers.fileType
    });
    let temp = JSON.parse(window.localStorage.getItem('user'));
    temp.profileImage = response.data.profileImage;
    localStorage.setItem('user', JSON.stringify(temp));
    dispatch(slice.actions.updateProfileImageSuccess({ user: temp }));
    dispatch(endLoading());
  };
}

// ----------------------------------------------------------------------
export function logout() {
  return async (dispatch) => {
    setSession(null);
    dispatch(slice.actions.logoutSuccess());
    dispatch(getSuccess(apiMessage.logoutSuccess));
  };
}

// ----------------------------------------------------------------------
export function getInitialize() {
  return async (dispatch) => {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      if (accessToken && isValidToken(accessToken)) {
        dispatch(
          slice.actions.getInitialize({
            isAuthenticated: true,
            user: JSON.parse(window.localStorage.getItem('user')),
            accessToken: accessToken
          })
        );
        setSession(
          accessToken,
          JSON.parse(window.localStorage.getItem('user'))
        );
      } else {
        dispatch(
          slice.actions.getInitialize({
            isAuthenticated: false,
            user: null,
            accessToken: null
          })
        );
      }
    } catch (error) {
      dispatch(
        slice.actions.getInitialize({
          isAuthenticated: false,
          user: null,
          accessToken: null
        })
      );
    }
  };
}
