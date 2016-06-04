var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send(generateHome());
});

app.listen(3000, function() {
	console.log('Accepting HTTP on port 3000! ');
});

function generateHome() {
	var numberOfHomes = chance.integer({
		min: 1,
		max: 10
	});
	console.log(numberOfHomes);
	var homes = [];
	for(var i = 0; i < numberOfHomes; i++) {

		homes.push({
			address: chance.address(),
			areacode: chance.areacode(),
			city: chance.city(),
			country: chance.country()
		});
	};
	console.log(homes);
	return homes;
}