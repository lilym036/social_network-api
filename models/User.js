const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
    {
      username: { type: String, required: true, unique: true, trimmed: true},
      email: { 
        type: String, 
        required: true, 
        unique: true,
        // validating that this is an email
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please input a valid email address",
        ],
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
      
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

// Initialize User model
const User = model('user', userSchema);

module.exports = User;