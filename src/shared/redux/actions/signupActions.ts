

export const SIGN_UP = 'SIGN_UP';

export interface SignupAction {
  type: string,
  info: string,
};

export interface SignupState {
  token : string
};

export function signup(): SignupAction {
  return {
    type: SIGN_UP,
    info: 'first redux action',
  };
};
