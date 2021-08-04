import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

// ----------------------------------------------------------------------
const initialState = {
  isLoading: false,
  errorAndSuccess: false,
  message: '',
  type: ''
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // END LOADING
    endLoading(state) {
      state.isLoading = false;
    },

    // GET SUCCESS
    hasSuccess(state, action) {
      state.isLoading = false;
      state.errorAndSuccess = true;
      state.type = 'success';
      state.message = action.payload;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.errorAndSuccess = true;
      state.type = 'error';
      state.message = action.payload;
    },

    // HAS ERROR
    reset(state, action) {
      state.isLoading = false;
      state.errorAndSuccess = false;
      state.type = '';
      state.message = '';
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
export function getSuccess(message) {
  return async (dispatch) => {
    dispatch(slice.actions.hasSuccess([message]));
  };
}

// ----------------------------------------------------------------------
export function getError(error) {
  return async (dispatch) => {
    let tempError = [];
    if (error && error.response && error.response.status === 400) {
      if (error.response.data && error.response.data.validationErrors) {
        _.map(error.response.data.validationErrors, function (v) {
          console.log(v[0]);
          if (v && v.length > 0) {
            tempError.push(v[0]);
          }
        });
      } else if (error.response.data && error.response.data.message) {
        tempError.push(error.response.data.message);
      }
    } else if (error && error.response && error.response.status === 415) {
      if (error.response.data && error.response.data.title) {
        tempError.push(error.response.data.title);
      }
    } else if (error && error.response && error.response.status === 401) {
      if (error.response.statusText) {
        tempError.push(error.response.statusText);
      }
    } else {
      let temp = JSON.parse(JSON.stringify(error));
      if (temp && temp.message === 'Network Error') {
        tempError.push([temp.message]);
      } else {
        tempError.push(error);
      }
    }
    dispatch(slice.actions.hasError(tempError));
  };
}

// ----------------------------------------------------------------------
export function reset() {
  return async (dispatch) => {
    dispatch(slice.actions.reset());
  };
}

// ----------------------------------------------------------------------
export function startLoading() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
  };
}

// ----------------------------------------------------------------------
export function endLoading() {
  return async (dispatch) => {
    dispatch(slice.actions.endLoading());
  };
}
