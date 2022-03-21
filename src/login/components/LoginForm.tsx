import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoginInputs } from '../../shared/Inputs';
import { fetchLogin } from '../../shared/redux/actions/loginActions';

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginInputs>();
  const token = useSelector((state) => state);
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    dispatch(fetchLogin(data));
    console.log(data, token);
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
            {...register('email', { required: true })}
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
