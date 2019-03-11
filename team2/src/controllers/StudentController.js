module.exports = {
	students: async function (req, res) {
		/* There are the names which belongs to Team2 server */
		var names = ["Priti", "Sourabh", "Karan","Gaurav","Dhaval","Avais"];
		try {
			res.send(JSON.stringify(names))
		} catch (err) {
			res.status(400).send({
				error: "Some Error in the server !"
			})
		}
	}
}