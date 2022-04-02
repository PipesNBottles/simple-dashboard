import { Link } from 'react-router-dom';

export default function WelcomPage() {
  return (
    <div className="row">
      <div className="col">
        <Link to='/signup' >
          <button type='button' className='btn btn-dark'>
            Sign up
          </button>
        </Link>
      </div>
      <div className="col">
        <Link to='/login' >
          <button type='button' className='btn btn-dark'>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
