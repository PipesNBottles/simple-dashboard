import './App.css';
import LoginForm from './login/components/LoginForm';
import SignupForm from './signup/components/SignUp';

/**
 * React APP component.
 * @return {jsx}
 */
function App() {
  return (
    <div className="App">
      <LoginForm />
      <SignupForm />
    </div>
  );
}

export default App;
