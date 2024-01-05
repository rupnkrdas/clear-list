import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
	return (
		<div className="mt-20 mb-80 flex flex-col justify-center">
			<Header
				heading="Signup to create an account"
				paragraph="Already have an account? "
				linkName="Login"
				linkUrl="/"
			/>
			<Signup />
		</div>
	);
}
