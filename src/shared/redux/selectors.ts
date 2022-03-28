// TODO

import { User } from '../Inputs';
import { RootState } from './store';

export function getLoginToken(state: RootState): string {
  return state.login.payload.token['access_token'];
}

export function getUserInfo(state: RootState): User | undefined {
  return state.signup.payload;
}
