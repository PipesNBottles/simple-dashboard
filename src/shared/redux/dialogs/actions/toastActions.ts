import { AxiosError } from 'axios';
import { ReactText } from 'react';
import { toast } from 'react-toastify';
import { ToastDetails } from '../../../types';

export const SUCCESS_TOAST = 'success';
export const ERROR_TOAST = 'error';

export type ToastAction = {
  type: string,
  toast: ReactText
}

function createToastSuccess(toastMessage: ReactText): ToastAction {
  return {
    type: SUCCESS_TOAST,
    toast: toastMessage,
  };
}

function createToastError(toastMessage: ReactText): ToastAction {
  return {
    type: ERROR_TOAST,
    toast: toastMessage,
  };
}

function createToast(toastDetails: ToastDetails) {
  const toastMessage = toast(toastDetails.message, {
    type: toastDetails.type,
    autoClose: toastDetails.duration * 1000,
  });
  if (toastDetails.type == SUCCESS_TOAST) {
    return createToastSuccess(toastMessage);
  } else {
    return createToastError(toastMessage);
  }
}

export function errorNotice(error: AxiosError['response']) {
  const errorMessage: ToastDetails = {
    message: 'Something went wrong',
    duration: 3,
    type: ERROR_TOAST,
  };
  if ( error && error?.status >= 400 && error?.status < 422) {
    errorMessage.message = error.data?.detail || 'Something went wrong';
  } else if (error?.status == 422) {
    errorMessage.message = (
      error.data.detail?.[0].msg ||
      'You messed up an input');
  }
  return createToast(errorMessage);
}

export function successNotice() {
  const toastMessage: ToastDetails = {
    message: 'Successful Action',
    duration: 3,
    type: SUCCESS_TOAST,
  };

  return createToast(toastMessage);
}
