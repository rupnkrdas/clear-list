import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import signoutImage from "../assets/signout.png";
import { Tooltip } from "react-tooltip";
import LoadingSpinner from "../components/LoadingSpinner";
import ConfirmationDialog from "../components/ConfirmationDialogue";
import { BACKEND_URL } from "../constants/urls";

export default function TodosPage() {
	const [todos, setTodos] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [newTodoTitle, setNewTodoTitle] = useState("");
	const [newTodoDescription, setNewTodoDescription] = useState("");
	const [loading, setLoading] = useState(true);
	const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

	function handleSignout() {
		localStorage.removeItem("token");
		window.location.href = "/";
	}

	function handleShowConfirmationDialogue() {
		setShowConfirmationDialog(true);
	}

	// Fetch todos
	async function fetchData() {
		fetch(`${BACKEND_URL}/user/todos`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		})
			.then(async (res) => {
				const body = await res.json();
				// console.log(body);
				if (res.status === 401) {
					window.location.href = "/";
					localStorage.removeItem("token");
				} else {
					setTodos(body["todos"]);
				}
			})
			.catch((err) => console.log(`Error : ${err}`));
	}

	// Show create new todo popup
	const handleShowPopup = () => {
		setShowModal(true);
	};

	const handleClosePopup = () => {
		setShowModal(false);
	};

	async function createNewTodo() {
		fetch(`${BACKEND_URL}/user/todos`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify({
				title: newTodoTitle,
				description: newTodoDescription,
				isCompleted: false,
			}),
		})
			.then(async (res) => {
				const body = await res.json();
				// console.log(body);
				if (res.status === 201) {
					setTodos([...todos, body["todo"]]);
					setShowModal(false);
					setNewTodoTitle("");
					setNewTodoDescription("");
				} else {
					alert(body.message);
				}
			})
			.catch((err) => console.log(`Error : ${err}`));
	}

	useEffect(() => {
		fetchData();
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center mt-40">
			{loading ? (
				<LoadingSpinner />
			) : (
				<div>
					<div className="flex flex-row items-start">
						{/* Todo Cards */}
						<div className="grid grid-cols-2 gap-5 flex-grow">
							{todos.length === 0 ? (
								<p className="text-center text-gray-500">
									No todos available
								</p>
							) : (
								todos.map((todo) => (
									<TodoCard
										key={todo._id}
										_id={todo._id}
										title={todo.title}
										description={todo.description}
										isCompleted={todo.isCompleted}
									/>
								))
							)}
						</div>

						<div className="flex flex-col items-start ml-4">
							{/* Create new todo button */}
							<button
								className="h-16 w-16 p-4 bg-gray-700 text-white rounded-full hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium text-lg hover:text-black flex items-center m-2"
								onClick={handleShowPopup}
								data-tooltip-content="Create New Todo"
								data-tooltip-id="createNewTodo"
								data-tooltip-place="left"
							>
								<Tooltip id="createNewTodo" />
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-10 w-10"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"
									/>
								</svg>
							</button>

							{/* Signout button */}
							<button
								className="h-16 w-16 p-4 border-2 text-white border-red-500 rounded-full hover:bg-red-100 focus:ring-4 focus:ring-blue-300 font-medium text-sm  m-2 flex items-center justify-center"
								onClick={handleShowConfirmationDialogue}
								data-tooltip-content="Sign Out"
								data-tooltip-id="123qwerasdf"
								data-tooltip-place="left"
								data-tooltip-class-name="text-lg font-medium text-black"
							>
								<Tooltip id="123qwerasdf" />
								<img src={signoutImage} />
							</button>
						</div>
					</div>

					{/* Confirmation Dialog */}
					{showConfirmationDialog && (
						<ConfirmationDialog
							message="Are you sure you want to sign out?"
							onConfirm={() => {
								handleSignout();
								// setShowConfirmationDialog(false);
							}}
							onCancel={() => setShowConfirmationDialog(false)}
						/>
					)}

					{/* Modal for entering new todo details */}
					{showModal && (
						<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
							<div className="bg-white p-6 rounded-lg shadow-md w-96">
								<input
									type="text"
									id="todoTitle"
									placeholder="Title"
									value={newTodoTitle}
									onChange={(e) =>
										setNewTodoTitle(String(e.target.value))
									}
									className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none"
								/>

								<textarea
									id="todoDescription"
									placeholder="Description"
									value={newTodoDescription}
									onChange={(e) =>
										setNewTodoDescription(
											String(e.target.value)
										)
									}
									className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none"
								/>

								<div className="flex justify-end">
									<button
										className="bg-gray-700 text-white px-4 py-2 rounded-md mr-2 focus:outline-none hover:bg-gray-500"
										onClick={createNewTodo}
									>
										Add Todo
									</button>
									<button
										className="bg-gray-300 text-black px-4 py-2 rounded-md focus:outline-none"
										onClick={handleClosePopup}
									>
										Cancel
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
