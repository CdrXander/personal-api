var secrets = require('../secret.js');

module.exports = {
	getSecrets:getSecrets
}


function getSecrets(req,res,next) {
	res.status(200).send(secrets);
}