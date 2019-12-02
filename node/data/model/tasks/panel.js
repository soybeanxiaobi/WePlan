const Panel = require('../../schema/tasks/panel');

const { DoneNumOfDay } = Panel;

function fetch() {
  DoneNumOfDay.find({}, (err, res) => {
    if (err) {
      return err;
    }
    return res;
  });
}

module.exports = { fetch };
