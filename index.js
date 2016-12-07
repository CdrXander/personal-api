var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var skillsCtrl = require('./controllers/skillsCtrl.js');
var secretCtrl = require('./controllers/secretCtrl.js');

var port = 3000;

var app = express();

app.use(bodyParser.json());
//app.use(middleware.addHeaders);

//	#	#	#	READ METHODS	#	#	#
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);


//	#	#	#	WRITE METHODS	#	#	#
app.put("/name/:name", mainCtrl.updateName);
app.put('/location/:location', mainCtrl.updateLocation);
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);
app.post('/family', mainCtrl.addFamilyMember);
app.post('/restaurants',mainCtrl.addRestaurant);


//	#	#	#	SKILLS METHODS	#	#	#
app.get('/skillz', skillsCtrl.getSkills);
app.post('/skillz', middleware.generateId, skillsCtrl.addSkill);

//	#	#	#	SECRETS METHODS	#	#	#
app.get('/secrets/:username/:pin', middleware.verifyId, secretCtrl.getSecrets);


app.listen(port, function() {
	console.log('Listening on Port ', port);
}); 
