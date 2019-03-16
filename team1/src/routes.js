

const StudentController = require("./controllers/StudentController")
module.exports = {
	setRoutes : function(app) {
		console.log("Routes are setting up...\n\n")

		app.post("/students",
		StudentController.students)
	}
}