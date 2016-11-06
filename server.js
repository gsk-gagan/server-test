var express = require('express');
var app = express();

// console.out('Server started');

app.get('/', function(req, res) {
	res.send('Welcome to the home page');
});

app.get('/about', function(req, res) {
	res.send('This was implemented by GSK');
});

app.listen(3000, function () {
	console.log('Server started');
});