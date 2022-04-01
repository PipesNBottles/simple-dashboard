import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginInputs } from '../../shared/Inputs';
import { fetchLogin } from '../../shared/redux/login/actions/loginActions';
import { getLoginToken } from '../../shared/redux/selectors';

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginInputs>();
  const token = useSelector(getLoginToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [token]);


  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const formData = new URLSearchParams(data);
    dispatch(fetchLogin(formData));
  };

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="input-email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="input-email"
            placeholder="Enter Email"
            {...register('username', { required: true })}
          />
          <small id="email-help" className="form-text text-muted">
            Enter your email, we definitely will not leak it
          </small>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3 mt-3">
          <label htmlFor="input-password">Password</label>
          <input
            type="password"
            className="form-control"
            id="input-password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3 mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
