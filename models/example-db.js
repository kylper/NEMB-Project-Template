// This is an example of a db model for a user account

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
        authId: String,
        name: String,
        email: String,
        role: String,
        created: Date,
});

var User = mongoose.model('User', userSchema);
module.exports = User;
