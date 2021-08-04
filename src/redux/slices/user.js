import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { apiList, headers } from 'src/constants';
import { getError, startLoading, endLoading } from 'src/redux/slices/error';

// ----------------------------------------------------------------------
const initialState = {
  myProfile: null
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // GET PROFILE
    getProfileSuccess(state, action) {
      state.myProfile = action.payload;
    },

    // SEND EMAIL CODE
    emailVerifySuccess(state, action) {}
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
export function getProfile() {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.get(apiList.getProfile, {
        headers: headers.applicationJson
      });
      dispatch(slice.actions.getProfileSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function sendVerifyEmailCode() {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.post(apiList.sendVerifyEmailCode, {
        headers: headers.applicationJson
      });
      dispatch(slice.actions.emailVerifySuccess(response.data));
      dispatch(getProfile());
      dispatch(endLoading());
    } catch (error) {
      dispatch(getError(error));
    }
  };
}
