var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Users = require('./models/users');

mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;


app.get('/users', function (req, res) {
    Users.getUsers(function(err, users){
        if(err){
            throw err;
        }
    res.json(users);

    });  

}); 


 // add new users

app.post('/users', function (req, res) {
    var users = req.body;
    Users.addUsers(users, function(err, users){
        if(err){
            throw err;
        }
    res.json(users);

    });

}); 


 // update users 

app.put('/users/:_id', function (req, res) {
    var id = req.params._id;
    var users = req.body;
    Users.updateUsers(id, users, {}, function(err, users){
        if(err){
            throw err;
        }
    res.json(users);

    });

}); 

// delete users

app.delete('/users/:_id', function (req, res) {
    var id = req.params._id;
    Users.removeUsers(id, function(err, users){
        if(err){
            throw err;
        }
    res.json(users);

    });

}); 

app.listen(port);

console.log('RESTful API started on: ' + port);
