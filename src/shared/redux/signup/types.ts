import { User } from '../../Inputs';

interface SignupUser {
  token: User
}
export interface SignupAction {
  type: string,
  payload: object,
  loading: boolean,
  status?: number,
  errorMessage?: string,
};

export interface SignupState {
  loading: boolean,
  payload : SignupUser | undefined,
  error?: string,
  status?: number,
};
