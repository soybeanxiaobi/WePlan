const Study = require('../../schema/tasks/study');

const { StudyListModel } = Study;

function fetchList(params = {}) {
  return new Promise((resolve, reject) => {
    StudyListModel.find(params, { _id: 0 }, (err, res = []) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function insertList(params) {
  const list = new StudyListModel(params);
  list.save((err, res) => {
    if (err) {
      return err;
    }
    return res;
  });
}

function updateList(params) {
  const { id } = params;
  // 更新数组
  StudyListModel.update(
    {
      'items.id': id,
    },
    {
      $set: {
        'items.$.name': '更新成功-吉他',
        'items.$.doingNum': 100,
        'items.$.status': 'done',
      },
    },
    (err, res) => {
      if (err) {
        return err;
      }
      fetchList({});
      return res;
    },
  );
}

module.exports = { fetchList, insertList, updateList };
