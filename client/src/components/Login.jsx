import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
	const [loginState, setLoginState] = useState(fieldsState);

	const handleChange = (e) => {
		setLoginState({ ...loginState, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		authenticateUser();
	};

	const authenticateUser = () => {
		console.log(loginState);

		fetch("http://localhost:3000/user/login", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: loginState.username,
				password: loginState.password,
			}),
		})
			.then(async (res) => {
				const json = await res.json();
				console.log(json);

				if (res.status === 400) {
					alert(
						`${json.message}`
					);
				} else {
					localStorage.setItem("token", json.token);
					window.location.href = "/todos";
				}
			})
			.catch((err) => console.log(`Error : ${err}`));
	};

	return (
		<form className=" space-y-6" onSubmit={handleSubmit}>
			<div className="-space-y-px">
				{fields.map((field) => (
					<Input
						key={field.id}
						handleChange={handleChange}
						value={loginState[field.id]}
						labelText={field.labelText}
						labelFor={field.labelFor}
						id={field.id}
						name={field.name}
						type={field.type}
						isRequired={field.isRequired}
						placeholder={field.placeholder}
					/>
				))}
			</div>

			<FormAction handleSubmit={handleSubmit} text="Login" />
		</form>
	);
}
