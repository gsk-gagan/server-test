var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('Welcome to the home page');
});

app.get('/about', function(req, res) {
	res.send('This was implemented by GSK');
});

app.listen(PORT, function () {
	console.log('Server started at PORT: ' + PORT);
});