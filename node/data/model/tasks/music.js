const Music = require('../../schema/tasks/music');

const { List, Test } = Music;
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
  console.log('执行更新');
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

function fetchList(params = {}) {
  console.log('执行查询');
  List.find(params, (err, res) => {
    if (err) {
      return err;
    }
    console.log('fetchlist res ===>', res);
    return res;
  });
}
// fetchList({});
updateList({ id: 'chord' });
module.exports = { fetchList, insertList };
