const Music = require('../../schema/tasks/music');

const { MusicListModel } = Music;

function fetchList(params = {}) {
  return new Promise((resolve, reject) => {
    MusicListModel.find(params, { _id: 0 }, (err, res = []) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}

function insertList(params) {
  const list = new MusicListModel(params);
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
  MusicListModel.update(
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
