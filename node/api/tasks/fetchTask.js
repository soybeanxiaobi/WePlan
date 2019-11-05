const { MUSIC_TASK, STUDY_TASK } = require('./constants');

// 异步操作使用Promise
module.exports = function fetchTaskList(type) {
  let result;
  switch (type) {
    case 'music':
      result = MUSIC_TASK;
      break;
    case 'study':
      result = STUDY_TASK;
      break;
    default:
      break;
  }
  return result;
};
