import { AnyAction } from 'redux';
import {
  FETCH_SIGN_UP_REQUEST,
  FETCH_SIGN_UP_SUCCESS,
  FETCH_SIGN_UP_FAILURE } from '../actions/signupActions';
import { SignupState, SignupAction } from '../types';

const initialSignupState: SignupState = {
  loading: false,
  payload: undefined,
};

// eslint-disable-next-line max-len
export function signupReducer(state: SignupState = initialSignupState, action: SignupAction | AnyAction): SignupState {
  switch (action.type) {
  case FETCH_SIGN_UP_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case FETCH_SIGN_UP_SUCCESS:
    return {
      ...state,
      loading: false,
      payload: action.payload,
      error: '',
      status: action.status,
    };
  case FETCH_SIGN_UP_FAILURE:
    return {
      loading: false,
      payload: action.payload,
      error: action.errorMessage,
      status: action.status,
    };
  default: return state;
  }
};
