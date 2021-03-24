var express = require('express');
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb+srv://dbUser:messaging-app@clusterofdoom.t73v5.mongodb.net/messaging-app?retryWrites=true&w=majority'

const uri = "mongodb+srv://dbUser:messaging-app@clusterofdoom.t73v5.mongodb.net/messaging-app?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

var app = express();

var server = app.listen(5000, () => {
    console.log('Server is running on port', server.address().port);
});

app.use(express.static(__dirname));