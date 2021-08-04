import axios from 'axios';
import qs from 'qs';
import { createSlice } from '@reduxjs/toolkit';
import { cloneDeep, find } from 'lodash';
import { apiList, headers } from 'src/constants';
import { getError, startLoading, endLoading } from 'src/redux/slices/error';

// ----------------------------------------------------------------------
const initialState = {
  countries: [],
  countryDefault: {},
  categories: [],
  giftCardList: [],
  count: 0,
  giftCardDetails: {}
};

const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    // Countries list
    countriesSuccess(state, action) {
      state.countries = action.payload;
      let temp = JSON.parse(window.localStorage.getItem('country'));
      if (temp) {
        state.countryDefault = temp;
      } else {
        state.countryDefault =
          action.payload && action.payload.length > 0
            ? action.payload[action.payload.length - 1]
            : {};
        localStorage.setItem('country', JSON.stringify(state.countryDefault));
      }
    },
    // Set selected country
    setContry(state, action) {
      state.countryDefault = find(
        cloneDeep(state.countries),
        (v) => v.id === action.payload.id
      );
      localStorage.setItem('country', JSON.stringify(state.countryDefault));
    },
    // Categories list
    categoriesSuccess(state, action) {
      state.categories = action.payload;
    },
    // GET gift card list
    giftCardsSuccess(state, action) {
      state.giftCardList = action.payload;
    },
    // GET gift card count
    countGiftCardsSuccess(state, action) {
      state.count = action.payload.total;
    },
    // GET gift card information
    giftCardInfosSuccess(state, action) {
      state.giftCardDetails = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { setContry } = slice.actions;

// ----------------------------------------------------------------------
export function getCountries() {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(apiList.getCountries, {
        headers: headers.applicationJson
      });
      dispatch(slice.actions.countriesSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(endLoading());
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function getCategories() {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(apiList.getCategories, {
        headers: headers.applicationJson
      });
      dispatch(slice.actions.categoriesSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(endLoading());
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function getGiftCards(where) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(
        `${apiList.getGiftCards}?${qs.stringify(where)}`,
        {
          headers: headers.applicationJson
        }
      );
      dispatch(slice.actions.giftCardsSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(endLoading());
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function countGiftCards(where) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(
        `${apiList.countGiftCards}?${qs.stringify(where)}`,
        {
          headers: headers.applicationJson
        }
      );
      dispatch(slice.actions.countGiftCardsSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(endLoading());
      dispatch(getError(error));
    }
  };
}

// ----------------------------------------------------------------------
export function getGiftCardInfos(where) {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(
        `${apiList.getGiftCardInfos}?${qs.stringify(where)}`,
        {
          headers: headers.applicationJson
        }
      );
      dispatch(slice.actions.giftCardInfosSuccess(response.data));
      dispatch(endLoading());
    } catch (error) {
      dispatch(endLoading());
      dispatch(getError(error));
    }
  };
}
