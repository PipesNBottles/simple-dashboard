import { Link } from 'react-router-dom';

export default function WelcomPage() {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2">
          <div className="col col-md-6 mt-3 ml-4">
            <Link to='/signup' >
              <button type='button' className='btn btn-dark'>
            Sign up
              </button>
            </Link>
          </div>
          <div className="col-md-6 mt-3">
            <Link to='/login' >
              <button type='button' className='btn btn-dark'>
            Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
