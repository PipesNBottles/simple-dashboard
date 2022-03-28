export interface LoginAction {
  type: string,
  payload: object,
  loading: boolean,
  status?: number,
  errorMessage?: string,
};

export interface LoginState {
  loading: boolean,
  payload : {
   token?: { [key: string]: string }
  },
  error?: string,
  status?: number,
};
