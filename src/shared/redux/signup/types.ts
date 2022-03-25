import { User } from '../../Inputs';

export interface SignupAction {
  type: string,
  payload: object,
  loading: boolean,
  status?: number,
  errorMessage?: string,
};

export interface SignupState {
  loading: boolean,
  payload : User | undefined,
  error?: string,
  status?: number,
};
