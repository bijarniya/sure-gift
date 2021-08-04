import axios from 'axios';
import qs from 'qs';
import { createSlice } from '@reduxjs/toolkit';
import { apiList, headers } from 'src/constants';
import {
  getError,
  startLoading,
  endLoading,
  getSuccess
} from 'src/redux/slices/error';
import _ from 'lodash';
import { apiMessage } from 'src/constants/message';

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
  name: 'events',
  initialState,
  reducers: {
    // Add event
    addEventSuccess(state, action) {
      state.myEvents = action.payload;
    },

    // Delete event
    deleteEventSuccess(state, action) {
      _.remove(state.eventList, function (v) {
        return v.id === action.payload.eventId;
      });
      state.count = state.count - 1;
    },

    // GET events list
    getEventsSuccess(state, action) {
      state.eventList = action.payload;
    },

    // GET events count
    countEventsSuccess(state, action) {
      state.count = action.payload.total;
    },

    // GET event repeat types
    repeatTypesSuccess(state, action) {
      state.repeatTypes = action.payload;
    },

    // GET event reminder types
    reminderTypesSuccess(state, action) {
      state.reminderTypes = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
export function addEvent(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(apiList.addEvent, data, {
      headers: headers.applicationJson
    });
    dispatch(slice.actions.addEventSuccess(response.data));
  };
}

// ----------------------------------------------------------------------
export function editEvent(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(apiList.editEvent, data, {
      headers: headers.applicationJson
    });
    dispatch(slice.actions.addEventSuccess(response.data));
  };
}

// ----------------------------------------------------------------------
export function deleteEvent(where) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      await axios.post(apiList.deleteEvent, where, {
        headers: headers.applicationJson
      });
      dispatch(slice.actions.deleteEventSuccess(where));
      dispatch(endLoading());
      dispatch(getSuccess(apiMessage.eventDelete));
    } catch (error) {
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function getEvents(where) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(
        `${apiList.getEvents}?${qs.stringify(where)}`,
        {
          headers: headers.applicationJson
        }
      );
      dispatch(slice.actions.getEventsSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function countEvents(where) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(
        `${apiList.countEvents}?${qs.stringify(where)}`,
        {
          headers: headers.applicationJson
        }
      );
      dispatch(slice.actions.countEventsSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function getEventRepeatTypes() {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(apiList.getEventRepeatTypes, {
        headers: headers.applicationJson
      });
      dispatch(slice.actions.repeatTypesSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function getEventReminderTypes() {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(apiList.getEventReminderTypes, {
        headers: headers.applicationJson
      });
      dispatch(slice.actions.reminderTypesSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(getError(error));
    }
  };
}
