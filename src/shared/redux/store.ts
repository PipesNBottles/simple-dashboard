import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './login/reducers/loginReducers';
import { signupReducer } from './signup/reducers/signupReducers';
import { userReducer } from './users/reducers/userReducers';

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
