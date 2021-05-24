// The libraries
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var dbUrl = 'mongodb+srv://dbUser:messaging-app@clusterofdoom.t73v5.mongodb.net/messaging-app?retryWrites=true&w=majority'

// Database connection
mongoose.connect(dbUrl, (err) => {
    console.log('MongoDB successfully connected!', err);
    })

    var Message = mongoose.model('Message', { name : String, message : String})

    // Client connection alert
    io.on('connection', () =>{
        console.log('A user has connected')
       })

    // Body parser



var app = express();

// HTTP GET request
app.get('/messages', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  })

  // HTTP POST request
  app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
      res.sendStatus(200);
    })
  })

var server = app.listen(3000, () => {
    console.log('Server is running on port', server.address().port);
});

app.use(express.static(__dirname));