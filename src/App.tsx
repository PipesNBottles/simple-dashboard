import './App.css';
import LoginForm from './login/components/LoginForm';
import SignupForm from './signup/components/SignUp';
import EntryPoint from './entrypoint/components/Entrypoint';
import store from './shared/redux/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <EntryPoint /> } />
          <Route path='/login' element={ <LoginForm /> } />
          <Route path='/signup' element={ <SignupForm /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
