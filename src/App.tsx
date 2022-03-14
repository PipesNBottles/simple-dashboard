import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./login/components/LoginForm";
import SignupForm from "./signup/components/SignUp";

function App() {
	return (
		<div className="App">
			<LoginForm/>
			<SignupForm/>
		</div>
	);
}

export default App;
