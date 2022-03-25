import axios from 'axios';
import { Dispatch } from 'react';
import { LoginAction } from '../types';


export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';

export function fetchLoginRequest(payload: object): LoginAction {
  return {
    type: FETCH_LOGIN_REQUEST,
    payload: payload,
    loading: false,
  };
};

export function fetchLoginFailure(error: any): LoginAction {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error.data,
    loading: false,
    status: error.status,
    errorMessage: error.statusText,
  };
};

export function fetchLoginSuccess(token: string): LoginAction {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: { token: token },
    loading: false,
  };
};

export function fetchNetworkFailure(error: Error): LoginAction {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: { message: error.message, genericMessage: 'Network Failure' },
    loading: false,
  };
}

export function fetchLogin(data: any) {
  return function(dispatch: Dispatch<any>) {
    dispatch(fetchLoginRequest);
    axios.post('http://dev.shift.local/token', data)
      .then((response) => {
        dispatch(fetchLoginSuccess(response.data));
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          dispatch(fetchLoginFailure(error.response));
        } else {
          dispatch(fetchNetworkFailure(error.request));
        }
      });
  };
};
