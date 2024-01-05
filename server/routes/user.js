const express = require("express");
const {
	handleUserSignup,
	handleUserSignin,
	handleCreateNewTodo,
	handleUpdateTodo,
	handleGetTodos,
} = require("../controllers/user");
const { verifyUser } = require("../middlewares/authMiddleware");

const router = express.Router();

// SIGN UP
router.post("/signup", handleUserSignup);
// SIGN IN
router.post("/login", handleUserSignin);
// CREATE NEW TODO
router.post("/todos", verifyUser, handleCreateNewTodo);
// UPDATE TODO
router.patch("/todos/:id", verifyUser, handleUpdateTodo);
// GET TODOS
router.get("/todos", verifyUser, handleGetTodos);

module.exports = router;
