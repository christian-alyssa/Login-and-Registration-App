var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/info', function (req, res) {

    console.log ('id = ' + req.query.id );

    res.json({
        message: 'hello'
    });

});

app.post('/login', function (req, res) {


    if (req.body.username === 'user' && req.body.password === 'password') {
        res.json({
            message: 'success!'
        });
    } else {
        res.json({
            message: 'failed!'
        });
    }

});




app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
