export interface LoginAction {
  type: string,
  payload: object,
  loading: boolean,
  status?: number,
  errorMessage?: string,
};

export interface LoginState {
  loading: boolean,
  payload : object,
  error?: string,
  status?: number,
};
