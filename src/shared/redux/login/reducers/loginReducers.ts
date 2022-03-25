import { AnyAction } from 'redux';
import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from '../actions/loginActions';

import { LoginState, LoginAction } from '../types';


const initialLoginState: LoginState = {
  loading: false,
  payload: {},
  error: '',
};

// eslint-disable-next-line max-len
export function loginReducer(state: LoginState = initialLoginState, action: LoginAction | AnyAction): LoginState {
  switch (action.type) {
  case FETCH_LOGIN_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case FETCH_LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
      payload: action.payload,
      error: '',
      status: action.status,
    };
  case FETCH_LOGIN_FAILURE:
    return {
      loading: false,
      payload: action.payload,
      error: action.errorMessage,
      status: action.status,
    };
  default: return state;
  }
};
