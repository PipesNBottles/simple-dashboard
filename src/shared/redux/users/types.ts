import { User } from '../../Inputs';
export interface UserState {
  loading: boolean,
  payload: User[],
  error: string,
  status?: string,
};

export interface UserAction {
  type: string,
  payload: object,
  loading: boolean,
  status?: number,
  errorMessage?: string,
};
