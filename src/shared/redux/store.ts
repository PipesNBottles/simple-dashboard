import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './login/reducers/loginReducers';
import { signupReducer } from './signup/reducers/signupReducers';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
