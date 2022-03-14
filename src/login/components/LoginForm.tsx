import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInputs } from "../../shared/Inputs";

const LoginForm: React.FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();
	const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

	return (
		<div>
			<form onSubmit={ handleSubmit(onSubmit) }>
				<div className="row">
					<div className="col">
						<input type="text" placeholder="email" {...register("email", { required: true }) }/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<input type="text" placeholder="password" {...register("password", { required : true }) }/>
					</div>
				</div>
				<input type="submit"/>
			</form>
		</div>
	);
};

export default LoginForm;