const mongoose = require('../../db/tasks/study');

const { Schema } = mongoose;
const studyListSchema = new Schema(
  {
    items: {
      type: Array,
    },
  },
  {
    collection: 'list',
  },
);

const StudyListModel = mongoose.model('StudyList', studyListSchema);

module.exports = { StudyListModel };
