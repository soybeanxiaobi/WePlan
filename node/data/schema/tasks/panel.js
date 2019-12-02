const mongoose = require('../../db/tasks/panel');

const { Schema } = mongoose;
const doneNumOfDaySchema = new Schema(
  {
    _id: String,
    num: Number,
  },
  {
    collection: 'done_num_of_day',
  },
);

const DoneNumOfDay = mongoose.model('DoneNumOfDay', doneNumOfDaySchema);

module.exports = { DoneNumOfDay };
