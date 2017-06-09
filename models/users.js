var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },


});

var Users = module.exports = mongoose.model('Users', usersSchema);


module.exports.getUsers = function(callback, limit){
    Users.find(callback).limit(limit);
}


module.exports.addUsers = function(users, callback){
    Users.create(users, callback);
}

module.exports.updateUsers = function(id, users, options, callback){
    var query = {_id: id};
    var update = {
        name: users.name
    }
    Users.findOneAndUpdate(query, update, options, callback);
}


module.exports.removeUsers = function(id, callback){
    var query = {_id: id};
    Users.remove(query, callback);
}
