import { useState } from "react";
import { signupFields } from "../constants/formFields";
import { BACKEND_URL } from "../constants/urls";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
	const [signupState, setSignupState] = useState(fieldsState);

	const handleChange = (e) =>
		setSignupState({ ...signupState, [e.target.id]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(signupState);
		createAccount();
	};

	//handle Signup API Integration here
	const createAccount = async () => {
		fetch(`${BACKEND_URL}/user/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: signupState.username,
				password: signupState.password,
			}),
		})
			.then(async (res) => {
				const json = await res.json();

				if (res.status === 400) {
					alert(`${json.message}`);
				} else {
					// go to login page
					alert(`${json.message}`);
					window.location.href = "/";
				}
			})
			.catch((err) => console.log(`Error : ${err}`));
	};

	return (
		<form className="space-y-6" onSubmit={handleSubmit}>
			<div className="">
				{fields.map((field) => (
					<Input
						key={field.id}
						handleChange={handleChange}
						value={signupState[field.id]}
						labelText={field.labelText}
						labelFor={field.labelFor}
						id={field.id}
						name={field.name}
						type={field.type}
						isRequired={field.isRequired}
						placeholder={field.placeholder}
					/>
				))}
				<FormAction handleSubmit={handleSubmit} text="Signup" />
			</div>
		</form>
	);
}
