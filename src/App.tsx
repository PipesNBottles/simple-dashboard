import './App.css';
import { Outlet } from 'react-router-dom';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer } from 'react-toastify';

if (typeof window !== 'undefined') {
  injectStyle();
}

function App() {
  return (
    <div>
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
