const { Schema, Types } = require('mongoose');

// schema only
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: { 
        type: String, 
        required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return date.toISOString().split("T") [0];
      },
    },
  },
  {
    toJSON: {
        virtuals: false,
        getters: true
    },
    id: false,
}
  
);

module.exports = reactionSchema;