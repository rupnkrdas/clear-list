import Header from "../components/Header";
import Login from "../components/Login";

const LoginPage = (props) => {
	return (
		<div className="mt-20 mb-80 flex flex-col justify-center">
			<Header
				heading="Login to your account"
				paragraph="Don't have an account yet?"
				linkName="Signup"
				linkUrl="/signup"
				isLoginPage={true}
			/>
			<Login />
		</div>
	);
};

export default LoginPage;
