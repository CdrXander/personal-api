var user = require('../user.js');

module.exports = {
	getName:getName,
	getLocation:getLocation,
	getOccupations:getOccupations,
	getLatestOccupation:getLatestOccupation,
	getHobbies:getHobbies,
	getHobbiesByType:getHobbiesByType,
	getFamily:getFamily,
	getFamilyByGender:getFamilyByGender,
	getRestaurants:getRestaurants,
	getRestaurantsByName:getRestaurantsByName
}

function getName(req, res, next) {
	res.status(200).send(user.name);
}

function getLocation(req,res,next) {
	res.status(200).send(user.location);
}

function getOccupations(req,res,next) {

	var result = user.occupations;
	switch(req.query.order) {
		case 'desc':
			result = result.sort();
			break;
		case 'asc':
			result = result.sort().reverse();
			break;
	}

	res.status(200).send(result);
}

function getLatestOccupation(req,res,next) {
	var obj = {latestOccupation: user.occupations[user.occupations.length-1]};
	res.status(200).send(obj);
}

function getHobbies(req,res,next) {
	res.status(200).send(user.hobbies);
}

function getHobbiesByType(req,res,next) {
	var result = user.hobbies.filter(function(hobby) {
		return hobby.type === req.params.type;
	})

	if(result.length > 0) {
		res.status(200).send(result);
	} else {
		res.status(200).send("No hobbies found for that type");
	}
}

function getFamily(req,res,next) {
	res.status(200).send(user.family);
}

function getFamilyByGender(req,res,next) {
	var result = user.family.filter(function(member) {
		console.log(member.gender + " : " + req.params.gender);
		return member.gender === req.params.gender;
	})

	if(result.length > 0) {
		res.status(200).send(result);
	} else {
		res.status(200).send('No family members found for that gender');
	}
}

function getRestaurants(req,res,next) {
	res.status(200).send(user.restaurants);
}

function getRestaurantsByName(req,res,next) {
	res.status(200).send(
		user.restaurants.filter(function(rest) {
			return rest.name === req.params.name;
		})
	)
}