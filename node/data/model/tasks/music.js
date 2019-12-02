const Music = require('../../schema/tasks/music');

const { List } = Music;

function fetchList(params = {}) {
  List.find(params, (err, res) => {
    if (err) {
      return err;
    }
    return res;
  });
}

function insertList(params) {
  const list = new List(params);
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
  List.update(
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
