const Panel = require('../../schema/tasks/panel');

const { DoneNumModel, ClockDayModel, DoneProgressModel } = Panel;

function fetchDailyDoneNum() {
  return new Promise((resolve, reject) => {
    DoneNumModel.findOne({}, { _id: 0 }, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function fetchDailyDoneProgress() {
  return new Promise((resolve, reject) => {
    DoneProgressModel.findOne({}, { _id: 0 }, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function fetchClockDay() {
  return new Promise((resolve, reject) => {
    ClockDayModel.findOne({}, { _id: 0 }, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

module.exports = { fetchDailyDoneNum, fetchDailyDoneProgress, fetchClockDay };
