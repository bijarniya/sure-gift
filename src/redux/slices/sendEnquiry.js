import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { apiList, headers } from 'src/constants';
import { startLoading } from 'src/redux/slices/error';

// ----------------------------------------------------------------------
const initialState = {
  error: false,
  myEvents: {},
  eventList: [],
  count: 0,
  repeatTypes: [],
  reminderTypes: []
};

const slice = createSlice({
  name: 'sendEnquiry',
  initialState,
  reducers: {
    // send enquiry
    sendSuccess(state, action) {
      state.myEvents = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
export function sendEnquiry(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(apiList.sendEnquiry, data, {
      headers: headers.applicationJson
    });
    dispatch(slice.actions.sendSuccess(response.data));
  };
}

// ----------------------------------------------------------------------
export function submitApplication(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(apiList.submitApplication, data, {
      headers: headers.applicationJson
    });
    dispatch(slice.actions.sendSuccess(response.data));
  };
}
