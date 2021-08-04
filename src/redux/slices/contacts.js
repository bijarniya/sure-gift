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
  myContact: {},
  contactList: [],
  count: 0
};

const slice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // Add contacts
    addContactSuccess(state, action) {
      state.myContact = action.payload;
    },

    // GET contacts list
    getContactSuccess(state, action) {
      state.contactList = action.payload;
    },

    // GET contacts count
    countContactsSuccess(state, action) {
      state.count = action.payload.total;
    },

    // Delete contacts
    deleteContactsSuccess(state, action) {
      _.remove(state.contactList, function (v) {
        return v.id === action.payload.contactId;
      });
      state.count = state.count - 1;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------
export function addContact(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(apiList.addContact, data, {
      headers: headers.applicationJson
    });
    dispatch(slice.actions.addContactSuccess(response.data));
  };
}

// ----------------------------------------------------------------------
export function editContact(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    const response = await axios.post(apiList.editContact, data, {
      headers: headers.applicationJson
    });
    dispatch(slice.actions.addContactSuccess(response.data));
  };
}

// ----------------------------------------------------------------------
export function getContact(where) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(
        `${apiList.getContacts}?${qs.stringify(where)}`,
        {
          headers: headers.applicationJson
        }
      );
      dispatch(slice.actions.getContactSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function countContacts(where) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(
        `${apiList.countContacts}?${qs.stringify(where)}`,
        {
          headers: headers.applicationJson
        }
      );
      dispatch(slice.actions.countContactsSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function deleteContact(where) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      await axios.post(apiList.deleteContact, where, {
        headers: headers.applicationJson
      });
      dispatch(slice.actions.deleteContactsSuccess(where));
      dispatch(endLoading());
      dispatch(getSuccess(apiMessage.contactDelete));
    } catch (error) {
      dispatch(getError(error));
    }
  };
}
