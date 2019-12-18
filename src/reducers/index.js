import { combineReducers } from 'redux';
import {
  GET_DATA,
  GET_HIGH_PRICE,
  GET_LOW_PRICE
} from '../constants/actionTypes';

export const initialState = {
  productList: []
};

const getData = (state = initialState.productList, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.data;
    case GET_HIGH_PRICE:
      return action.data;
    case GET_LOW_PRICE:
      return action.data;
    default:
      return state;
  }
};

const myrealtrip = combineReducers({
  productList: getData
});

export default myrealtrip;
