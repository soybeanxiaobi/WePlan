const panel = require('../../data/model/tasks/panel');

const { fetchDailyDoneNum, fetchDailyDoneProgress, fetchClockDay } = panel;
async function fetchPanel() {
  const progress = await fetchDailyDoneProgress();
  const doneNum = await fetchDailyDoneNum();
  const clockDay = await fetchClockDay();
  // const result = await Promise.all([
  //   fetchDailyDoneNum(),
  //   fetchDailyDoneProgress(),
  //   fetchClockDay(),
  // ]);
  return {
    progress,
    doneNum,
    clockDay,
  };
}

module.exports = fetchPanel;
