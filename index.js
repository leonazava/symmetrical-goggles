var path = require('path');
var express = require('express');
var cors = require("cors")
var fs = require('fs');
var app = express();

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.get("/", cors(), (req, res) => {
	var file = "public/botw.jpg"
	var s = fs.createReadStream(file)
s.on('open', function () {
	res.set('Content-Type', 'image/jpg')
	s.pipe(res) })
})

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});

