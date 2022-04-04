import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { LoginAction } from '../types';
import { errorNotice, successNotice } from '../../dialogs/actions/toastActions';


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

// eslint-disable-next-line max-len
export function fetchLoginFailure(error: AxiosError['response'] | AxiosError['request']): LoginAction {
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

export function fetchLogin(data: URLSearchParams) {
  return function(dispatch: Dispatch<any>) {
    dispatch(fetchLoginRequest);
    axios.post('http://dev.shift.local/token', data)
      .then((response) => {
        dispatch(fetchLoginSuccess(response.data));
        dispatch(successNotice);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          dispatch(fetchLoginFailure(error.response));
          dispatch(errorNotice(error.response));
        } else {
          dispatch(fetchNetworkFailure(error.request));
          dispatch(errorNotice(error.request));
        }
      });
  };
};
