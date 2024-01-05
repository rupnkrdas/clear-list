const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const verifyUser = async (req, res, next) => {
	const token =
		req.headers.authorization && req.headers.authorization.split(" ")[1];

	if (!token) {
		return res
			.status(401)
			.json({ message: "Unauthorized - Missing token" });
	}

	try {
		const decode = jwt.verify(token, JWT_SECRET);
		req.user = {
			username: decode.username,
		};

		// console.log(req.user);

		next();
	} catch (err) {
		console.log(`error: ${err}`);
		return res
			.status(401)
			.json({ message: "Unauthorized - Invalid token" });
	}
};

module.exports = {
	verifyUser,
};
