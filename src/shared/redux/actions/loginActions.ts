import axios from 'axios';
import { Dispatch } from 'react';
import { DetailedErrors } from '../../Errors';


export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';

export interface LoginAction {
  type: string,
  payload: object,
  loading: boolean,
};

export interface LoginState {
  loading: boolean,
  token : string,
  errors : DetailedErrors,
  error: string,
}

export function fetchLoginRequest(payload: object): LoginAction {
  return {
    type: FETCH_LOGIN_REQUEST,
    payload: payload,
    loading: false,
  };
};

export function fetchLoginFailure(error: object): LoginAction {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
    loading: false,
  };
};

export function fetchLoginSuccess(token: string): LoginAction {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: { token: token },
    loading: false,
  };
};

export function fetchLogin(data: object) {
  return function(dispatch: Dispatch<any>) {
    dispatch(fetchLoginRequest);
    axios.post('http://dev.shift.local/token', data)
      .then((response) => {
        dispatch(fetchLoginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchLoginFailure(error));
      });
  };
};
