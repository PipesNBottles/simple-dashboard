import './App.css';
import LoginForm from './login/components/LoginForm';
// import SignupForm from './signup/components/SignUp';
import store from './shared/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <LoginForm />
        {/* <SignupForm /> */}
      </div>
    </Provider>
  );
}

export default App;
