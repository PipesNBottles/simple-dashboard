import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import {
  successNotice,
  errorNotice } from '../../dialogs/actions/toastActions';

export const FETCH_GET_USERS_SUCCESS = 'FETCH_GET_USERS_SUCCESS';
export const FETCH_GET_USERS_FAILURE = 'FETCH_GET_USERS_FAILURE';
export const FETCH_GET_USERS_REQUEST = 'FETCH_GET_USERS_REQUEST';

export function fetchGetUsersRequest(payload: object) {
  return {
    type: FETCH_GET_USERS_REQUEST,
    payload: payload,
    loading: false,
  };
};

// eslint-disable-next-line max-len
export function fetchGetUsersFailure(error: AxiosError['response'] | AxiosError['request']) {
  return {
    type: FETCH_GET_USERS_FAILURE,
    payload: error.data,
    loading: false,
    status: error.status,
    errorMessage: error.statusText,
  };
};

export function fetchGetUsersSuccess(payload: object) {
  return {
    type: FETCH_GET_USERS_SUCCESS,
    payload: payload,
    loading: false,
  };
};

export function fetchUsers() {
  return function(dispatch: Dispatch<any>) {
    dispatch(fetchGetUsersRequest); {
      axios.get('http://dev.shift.local/v1/users')
        .then((response) => {
          dispatch(fetchGetUsersSuccess(response.data));
          dispatch(successNotice);
        })
        .catch((error) => {
          if (axios.isAxiosError(error)) {
            dispatch(errorNotice(error.response));
          } else {
            dispatch(errorNotice(error.request));
          }
          dispatch(fetchGetUsersFailure(error.response));
        });
    };
  };
}
