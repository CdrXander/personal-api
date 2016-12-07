module.exports = {
	addHeaders:addHeaders,
  generateId:generateId,
  verifyId:verifyId
}

var skills = require("../skills.js")
var index = skills.length;

var _USERNAME = "dreadlord";
var _PIN = "999";

function addHeaders(req,res,next){
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();	
}


function generateId(req,res,next) {
  req.index = index++;
  next();
}

function verifyId(req,res,next) {
  if(req.params.username === _USERNAME && req.params.pin === _PIN) {
    next();
  } else {
    res.status(403).send("Access Denied");
  }
}