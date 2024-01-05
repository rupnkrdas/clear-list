const mongoose = require("mongoose");
async function connectToDatabase(url) {
	await mongoose.connect(url);
}

module.exports = connectToDatabase;
