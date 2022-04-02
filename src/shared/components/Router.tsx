import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../../App';
import LoginForm from '../../login/components/LoginForm';
import SignupForm from '../../signup/components/SignUp';
import EntryPoint from '../../entrypoint/components/Entrypoint';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='login' element={ <LoginForm /> } />
        <Route path='signup' element={ <SignupForm /> } />
        <Route path='dashboard' element={ <EntryPoint /> } />
        <Route path='*' element = { <Navigate to='/'/> } />
      </Routes>
    </BrowserRouter>
  );
}
