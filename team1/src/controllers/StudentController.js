var request = require("request");
module.exports = {
	students: async function (req, res) {
		/* There are the names which belongs to Team2 server */
		var names = ["Debashish", "Dhananjay", "Lokesh","Parth", "Sayali", "Heaven"];
		
		/*fetch the other names from the Team2 server */
		request.post("http://localhost:8082/students", function (error, response, body) {		
			if(!error) {
				let names2 = JSON.parse(body)
				for(let i = 0, l = names2.length; i < l; i++) {
					names.push(names2[i])
				}
			}
			try {
				res.send(JSON.stringify(names))
			} catch (err) {
				res.status(400).send({
					error: "Some Error in the server !"
				})
			}
		});
	}
}