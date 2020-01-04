const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema ({
  author: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Blog', BlogSchema);
