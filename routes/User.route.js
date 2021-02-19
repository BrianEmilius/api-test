var User = require("../models/User.model");

module.exports = function(app) {
	app.get("/users", async function(req, res, next) {
		var users = await User.find({});
		res.json(users);
	});
};
