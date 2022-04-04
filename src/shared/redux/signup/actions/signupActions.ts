import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import { SignupAction } from '../types';
import { errorNotice, successNotice } from '../../dialogs/actions/toastActions';
import { SignupInputs } from '../../../Inputs';


export const FETCH_SIGN_UP_SUCCESS = 'FETCH_SIGN_UP_SUCCESS';
export const FETCH_SIGN_UP_FAILURE = 'FETCH_SIGN_UP_FAILURE';
export const FETCH_SIGN_UP_REQUEST = 'FETCH_SIGN_UP_REQUEST';

export function fetchSignupRequest(payload: object): SignupAction {
  return {
    type: FETCH_SIGN_UP_REQUEST,
    payload: payload,
    loading: false,
  };
};

// eslint-disable-next-line max-len
export function fetchSignupFailure(error: AxiosError['response'] | AxiosError['request']): SignupAction {
  return {
    type: FETCH_SIGN_UP_FAILURE,
    payload: error.data,
    loading: false,
    status: error.status,
    errorMessage: error.statusText,
  };
};

export function fetchSignupSuccess(token: string): SignupAction {
  return {
    type: FETCH_SIGN_UP_SUCCESS,
    payload: { token: token },
    loading: false,
  };
};

function fetchNetworkFailure(error: Error): SignupAction {
  return {
    type: FETCH_SIGN_UP_FAILURE,
    payload: { message: error.message, genericMessage: 'Network Failure' },
    loading: false,
  };
}

export function fetchSignup(data: SignupInputs) {
  return function(dispatch: Dispatch<any>) {
    dispatch(fetchSignup); {
      axios.post('http://dev.shift.local/v1/users', data)
        .then((response) => {
          dispatch(fetchSignupSuccess(response.data));
          dispatch(successNotice);
        })
        .catch((error) => {
          if (axios.isAxiosError(error)) {
            dispatch(fetchSignupFailure(error.response));
            dispatch(errorNotice(error.response));
          } else {
            dispatch(fetchNetworkFailure(error.response));
            dispatch(errorNotice(error.request));
          }
        });
    };
  };
}
