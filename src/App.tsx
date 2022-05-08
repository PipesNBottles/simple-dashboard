import './App.css';
import { Outlet } from 'react-router-dom';
import { injectStyle } from 'react-toastify/dist/inject-style';
import WelcomPage from './shared/components/WelcomPage';
import { useEffect } from 'react';
import { register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';

// TODO: remove this and use proper CSS
if (typeof window !== 'undefined') {
  injectStyle();
}

function App() {
  useEffect(() => {
    const setup = async () => {
      await register(await connect());
    };
    setup();
  }, []);
  return (
    <div>
      <Outlet />
      <WelcomPage />
    </div>
  );
}

export default App;
