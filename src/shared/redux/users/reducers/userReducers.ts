import { AnyAction } from 'redux';
import {
  FETCH_GET_USERS_SUCCESS,
  FETCH_GET_USERS_FAILURE,
  FETCH_GET_USERS_REQUEST } from '../actions/getUsersAction';

import { UserState, UserAction } from '../types';


const initialLoginState: UserState = {
  loading: false,
  payload: [],
  error: '',
};

// eslint-disable-next-line max-len
export function userReducer(state: UserState = initialLoginState, action: UserAction | AnyAction): UserState {
  switch (action.type) {
  case FETCH_GET_USERS_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case FETCH_GET_USERS_SUCCESS:
    return {
      ...state,
      loading: false,
      payload: action.payload,
      error: '',
      status: action.status,
    };
  case FETCH_GET_USERS_FAILURE:
    return {
      loading: false,
      payload: action.payload,
      error: action.errorMessage,
      status: action.status,
    };
  default: return state;
  }
};
