var skills = require('../skills.js');

module.exports = {
	getSkills:getSkills,
	addSkill:addSkill
}

function addSkill(req,res,next) {
	var skill = {
		id: 	req.index,
		name: 	req.body.name,
		exp: 	req.body.exp
	}
	skills.push(skill);
	res.status(200).send(skills);
}

function getSkills(req,res,next) {
	var result = skills;
	if(req.query.exp) {
		result = result.filter(function(skill) {
			return skill.exp === req.query.exp;
		})
	}
	res.status(200).send(result);
}

