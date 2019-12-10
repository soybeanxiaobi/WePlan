// const { MUSIC_TASK, STUDY_TASK } = require('./constants');
const study = require('../../data/model/tasks/study');
const music = require('../../data/model/tasks/music');

// 异步操作使用Promise
module.exports = async function fetchTaskList(type) {
  console.log('type', type);
  let result;
  switch (type) {
    case 'music':
      result = await music.fetchList();
      break;
    case 'study':
      result = await study.fetchList();
      break;
    default:
      break;
  }
  console.log('result', result);
  return result;
};
