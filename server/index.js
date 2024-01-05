const express = require("express");
const connectToDatabase = require("./config/db");
require("dotenv").config();
const userRouter = require("./routes/user");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// connect to database
connectToDatabase(process.env.MONGO_URI)
	.then(() => {
		console.log(`Connected to database successfully`);
	})
	.catch((err) => console.log(`Error connecting to database: ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/user", userRouter);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
});
