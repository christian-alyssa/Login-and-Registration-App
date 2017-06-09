var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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

/*
app.post('/login', function (req, res) {
    
  
console.log (req.body);
    if (req.body.username === 'alyssa' && req.body.password === '123') {
        res.json({
            message: 'success!'
        });
    } else {
        res.json({
            message: 'failed!'
        });
    }

});  

*/


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
