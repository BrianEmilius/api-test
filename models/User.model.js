var { Schema, model } = require("mongoose");

var User = new Schema({
	firstname: String,
	lastname: String,
	credentials: {
		email: {
			email: String,
			password: String
		}
	}
});

exports.userSchema = User;
module.exports = model("User", User);
