import { useState } from "react";
import { BACKEND_URL } from "../constants/urls";

export default function TodoCard(props) {
	const { _id, title, description, isCompleted } = props;
	const [completed, setCompleted] = useState(isCompleted);

	const changeStatus = async () => {
		//TODO: update todo and mark it as completed
		fetch(`${BACKEND_URL}/user/todos/${_id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify({
				isCompleted: !completed,
			}),
		})
			.then(async (res) => {
				const json = await res.json();
				// console.log(json);
				setCompleted(!completed);
			})
			.catch((err) => console.log(`Error : ${err}`));
	};

	return (
		<div className="max-w-sm p-6 border-none rounded-2xl shadow-gray-400 shadow-lg dark:bg-gray-800 dark:border-gray-700 text-left flex flex-col justify-between">
			<div className="mb-10">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>
			</div>
			<button
				type="button"
				className={
					!completed
						? "text-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
						: "text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-green-600 dark:hover:bg-gray-500"
				}
				onClick={changeStatus}
			>
				{completed ? "Completed" : "Mark as Completed"}
			</button>
		</div>
	);
}
