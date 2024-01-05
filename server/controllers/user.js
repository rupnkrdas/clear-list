const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");
const Todo = require("../models/todo");
const Cookies = require("js-cookie");

const handleUserSignup = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res
			.status(400)
			.json({ message: "Username and password are required" });
	}

	const userExists = await User.findOne({ username, password });
	if (userExists) {
		return res
			.status(400)
			.json({ message: "User already exists, login instead" });
	}

	await User.create({ username, password });
	return res.status(201).json({ message: "User created" });
};

const handleUserSignin = async (req, res) => {
	try {
		const { username, password } = req.body;
		if (!username || !password) {
			return res
				.status(400)
				.json({ message: "Username and password are required" });
		}

		const user = await User.findOne({ username });
		if (!user) {
			return res
				.status(400)
				.json({ message: "User not found. Please sign up." });
		}
		if (user) {
			if (user.password !== password) {
				return res
					.status(400)
					.json({ message: "Incorrect password. Please try again." });
			}
		}

		const jwtToken = jwt.sign({ username }, JWT_SECRET);
		return res
			.status(200)
			.json({ message: "User signed in", token: jwtToken });
	} catch (err) {
		console.log(`Error : ${err}`);
		return res.status(500).json({ message: err.message });
	}
};

const handleGetTodos = async (req, res) => {
	const username = req.user.username;
	try {
		const user = await User.findOne({ username });
		const todos = await Todo.find({ _id: { $in: user.todos } });

		return res.status(200).json({ todos });
	} catch (err) {
		console.log(`Error : ${err}`);
		return res.status(500).json({ message: err.message });
	}
};

const handleCreateNewTodo = async (req, res) => {
	const { title, description, isCompleted } = req.body;
	if (!title || !description) {
		return res
			.status(400)
			.json({ message: "Title and description are required" });
	}
	const username = req.user.username;
	const newTodo = await Todo.create({ title, description, isCompleted });

	await User.findOneAndUpdate(
		{ username },
		{ $push: { todos: newTodo._id } }
	);

	return res.status(201).json({ message: "Todo created", todo: newTodo });
};

const handleUpdateTodo = async (req, res) => {
	const todoId = req.params.id;
	const { isCompleted } = req.body;

	const updatedTodo = await Todo.findByIdAndUpdate(
		{ _id: todoId },
		{ isCompleted },
		{ new: true }
	);

	return res.status(200).json({ message: "Todo updated", todo: updatedTodo });
};

module.exports = {
	handleUserSignup,
	handleUserSignin,
	handleCreateNewTodo,
	handleUpdateTodo,
	handleGetTodos,
};
