var express = require ('express');
var router = express.Router();

//register 
router.get('register', function (req, res){
        res.render('register');
    

});


// Register User 
router.post('register', function (req, res){
        var username = req.body.username;
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var password = req.body.password;
        var password2 = req.body.password2;

        console.log(userName);

});

    module.exports = router;