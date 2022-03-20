import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 } from 'uuid';
import { SignupInputs } from '../../shared/Inputs';
import { Levels } from '../../shared/Enums';

const SignupForm: React.FC = () => {
  const { register, handleSubmit } = useForm<SignupInputs>();
  const onSubmit: SubmitHandler<SignupInputs> = (data) => {
    data.id = v4();
    console.log(data);
  };

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-3 md-6">
          <label htmlFor="signup-first-name"> First Name</label>
          <input
            type="text"
            className="form-control"
            id="input-first-name"
            placeholder="First Name"
            {...register('first_name', { required: true })}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-3 md-6 mt-3">
          <label htmlFor="signup-last-name"> Last Name</label>
          <input
            type="text"
            className="form-control"
            id="input-last-name"
            placeholder="Last Name"
            {...register('last_name', { required: true })}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-3 md-6 mt-3">
          <label htmlFor="signup-email"> Email Address</label>
          <input
            type="email"
            className="form-control"
            id="input-email"
            placeholder="Enter Email"
            {...register('email', { required: true })}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-3 md-6 mt-3">
          <label htmlFor="signup-password"> Password</label>
          <input
            type="password"
            className="form-control"
            id="input-password"
            placeholder="Enter Password"
            {...register('password', { required: true })}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-3 md-6 mt-3">
          <label htmlFor="input-level">Select Level</label>
          <select className="form-control"
            id="input-level"
            {...register('level', { required: true, valueAsNumber: true })}>
            <option value={Levels.EMPLOYEE}>Employee</option>
            <option value={Levels.MANAGER}>Manager</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3 mt-3">
          <button type="submit"
            className="btn btn-primary"
            onClick={handleSubmit(onSubmit)}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
