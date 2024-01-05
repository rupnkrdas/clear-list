const mongoose = require("mongoose");
async function connectToDatabase(uri) {
	await mongoose.connect(uri);
}

module.exports = connectToDatabase;
