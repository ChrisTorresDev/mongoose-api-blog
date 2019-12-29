const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  social: {
    facebook: { type: String, require: false },
    twitter: { type: String, require: false },
    linkedIn: { type: String, require: false }
  }
});

module.exports = mongoose.model('User', UserSchema);
