var express = require('express'),
	app = express(),
	server = app.listen(8000),
	fs = require('fs'); //require filesystem module
app.use(express.static('public'));