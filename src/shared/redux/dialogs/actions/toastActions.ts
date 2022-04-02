import { ReactText } from 'react';
import { toast } from 'react-toastify';
import { ToastDetails } from '../../../types';

export const SUCCESS_TOAST = 'success';
export const ERROR_TOAST = 'error';

export type ToastAction = {
  type: string,
  toast: ReactText
}

function createToastSuccess(toastMessage: any): ToastAction {
  return {
    type: SUCCESS_TOAST,
    toast: toastMessage,
  };
}

function createToastError(toastMessage: any): ToastAction {
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

export function errorNotice(error: any) {
  const errorMessage: ToastDetails = {
    message: '',
    duration: 3,
    type: ERROR_TOAST,
  };

  switch (error.status) {
  case 400:
    errorMessage.message = error.data?.detail || 'Something went wrong';
    break;
  default:
    errorMessage.message = 'Something went wrong';
    break;
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
