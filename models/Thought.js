const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        published: {
          type: Boolean,
          default: false,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
        meta: {
          upvotes: Number,
          bookmarks: Number,
        },
        text: {
          type: String,
          minLength: 15,
          maxLength: 500,
        },
      },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
    );

const Thought = model('thought', postSchema);

module.exports = Thought;