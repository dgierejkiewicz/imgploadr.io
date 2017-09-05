'use strict';

var path = require('path');
var express = require('express');
var config = require('./configure');
var app = express();
app = config(app);

// setup
app.set('port', process.env.Port || 3300);
app.set('views', path.join(__dirname, '../views'));

// console.log(app.get('views'));


// app.get('/', function (req, res) {
//     res.send('Hello world');
// });

app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});