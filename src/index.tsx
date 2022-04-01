import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginForm from './login/components/LoginForm';
import reportWebVitals from './reportWebVitals';
import SignupForm from './signup/components/SignUp';
import EntryPoint from './entrypoint/components/Entrypoint';
import store from './shared/redux/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <App /> }>
            <Route path='login' element={ <LoginForm /> } />
            <Route path='signup' element={ <SignupForm /> } />
            <Route path='dashboard' element={ <EntryPoint /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
