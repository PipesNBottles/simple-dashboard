import { useForm, SubmitHandler } from "react-hook-form";
import { SignupInputs } from "../../shared/Inputs";

const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupInputs>();
    const onSubmit: SubmitHandler<SignupInputs> = (data) => console.log(data);

    // TODO handle UUID generation on send

    return (
        <div>
          <form onSubmit={ handleSubmit(onSubmit) }>
          <div className="row">
            <div className="col">
            <input type="text" placeholder="email" {...register("first_name", { required: true }) }/>
            <input type="text" placeholder="password" {...register("last_name", { required : true }) }/>
            <input type="text" placeholder="password" {...register("email", { required : true }) }/>
            <input type="text" placeholder="password" {...register("password", { required : true }) }/>
            <input type="submit"/>
            </div>
          </div>
          </form>
        </div>
      );
};

export default SignupForm