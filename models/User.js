const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: { type: String, required: true, unique: true, trimmed: true},
      email: { 
        type: String, 
        required: true, 
        unique: true}
        // validate: {}
    },

    );

const User = model('user', userSchema);

module.exports = User;