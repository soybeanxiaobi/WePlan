import { message } from 'antd';
import { fetchTask } from '../services/task';
import { Effect } from 'dva';

export interface TaskModel {
  namespace: string;
  state: {
    list: string[];
  };
  effects: {
    fetchTask: Effect;
  };
  reducers: {
    setTaskList: any;
  };
}
const TaskModel: TaskModel = {
  namespace: 'task',

  state: {
    list: [],
  },

  effects: {
    *fetchTask({ payload }, { call, put }) {
      const response = yield call(fetchTask, payload);
      const { code, msg, data } = response || { code: 502 };
      if (code !== 0) {
        message.error(`获取文件夹列表失败：${msg}`);
      }
      yield put({
        type: 'setTaskList',
        payload: Array.isArray(data) ? data : [],
      });
    },
  },

  reducers: {
    setTaskList(_, { payload }) {
      return {
        list: payload,
      };
    },
  },
};

export default TaskModel;
