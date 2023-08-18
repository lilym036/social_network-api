const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// thought model
const thoughtSchema = new Schema(
    {
        thoughtText: { 
          type: String, 
          required: true, 
          minLength: 1, 
          maxLength: 280,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (date) => {
            if (date) return date.toISOString().split("T") [0];
          },
        },
        username: { 
          type: String, 
          required: true
        },
        reactions: [Reaction],
      },
      {
        toJSON: {
            virtuals: false,
            getters: true
        },
        id: false,
    }
    );

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;