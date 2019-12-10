const mongoose = require('../../db/tasks/panel');

const { Schema } = mongoose;

/** 当天完成数量/当天总任务数量 */
const doneNumSchema = new Schema(
  {
    doneNum: Number,
    allNum: Number,
  },
  {
    collection: 'daily_done_num',
  },
);

/** 打卡天数 */
const clockDaySchema = new Schema(
  {
    clockNum: Number,
  },
  {
    collection: 'clock_day',
  },
);

/** 完成进度 */
const doneProgressSchema = new Schema(
  {
    current: Number,
  },
  {
    collection: 'daily_done_progress',
  },
);

const DoneNumModel = mongoose.model('DoneNum', doneNumSchema);
const ClockDayModel = mongoose.model('ClockDay', clockDaySchema);
const DoneProgressModel = mongoose.model('DoneProgressModel', doneProgressSchema);

module.exports = { DoneNumModel, ClockDayModel, DoneProgressModel };
