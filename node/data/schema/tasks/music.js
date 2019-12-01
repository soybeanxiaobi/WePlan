const mongoose = require('../../db/tasks/music');

const { Schema } = mongoose;
const listSchema = new Schema(
  {
    _id: String,
    name: String,
    items: {
      type: Array,
    },
  },
  {
    collection: 'list',
  },
);
const TestSchema = new Schema(
  {
    name: { type: String },
  },
  {
    collection: 'test',
  },
);
const List = mongoose.model('List', listSchema);
const Test = mongoose.model('Test', TestSchema);

module.exports = { List, Test };
