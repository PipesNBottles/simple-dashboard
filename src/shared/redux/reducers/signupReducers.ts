import { SignupState, SignupAction, SIGN_UP } from '../actions/signupActions';

const initialSignupState: SignupState = {
  token: '',
};

export function signupReducer(
  state: SignupState = initialSignupState,
  action: SignupAction) {
  switch (action.type) {
  case SIGN_UP: return {
    ...state,
    token: 'test',
  };
  default: return state;
  }
};
