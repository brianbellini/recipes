const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5},
  recipeID: {type: Schema.Types.ObjectId, ref: 'Recipe'},
}, {
  timestamps: true
});


const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  comments: [noteSchema]
}, {
  timestamps: true
});



module.exports = mongoose.model('User', userSchema);