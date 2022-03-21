import { AnyAction } from 'redux';
import {
  LoginState,
  LoginAction,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from '../actions/loginActions';

import { DetailedErrors } from '../../Errors';


const initialLoginState: LoginState = {
  loading: false,
  token: '',
  errors: <DetailedErrors>{},
  error: '',
};

export function loginReducer(state: LoginState = initialLoginState,
  action: LoginAction | AnyAction) {
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
      token: 'success',
      error: '',
    };
  case FETCH_LOGIN_FAILURE:
    return {
      loading: false,
      token: '',
      errors: <DetailedErrors>{
        ...action.payload,
      },
      error: 'error',
    };
  default: return state;
  }
};
