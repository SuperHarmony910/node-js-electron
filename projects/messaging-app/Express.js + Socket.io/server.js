var express = require('express');
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb+srv://dbUser:messaging-app@clusterofdoom.t73v5.mongodb.net/messaging-app?retryWrites=true&w=majority'

mongoose.connect(dbUrl, (err) => {
    console.log('MongoDB successfully connected!', err);
    })

var app = express();

var server = app.listen(5000, () => {
    console.log('Server is running on port', server.address().port);
});

app.use(express.static(__dirname));