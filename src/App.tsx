import './App.css';
import { Outlet } from 'react-router-dom';
import { injectStyle } from 'react-toastify/dist/inject-style';
import WelcomPage from './shared/components/WelcomPage';

// TODO: remove this and use proper CSS
if (typeof window !== 'undefined') {
  injectStyle();
}

function App() {
  return (
    <div>
      <Outlet />
      <WelcomPage />
    </div>
  );
}

export default App;
