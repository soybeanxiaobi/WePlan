import { message } from 'antd';
import { fetchTask } from '../services/task';
import { Effect } from 'dva';

export interface TasksModel {
  namespace: string;
  state: {
    list: {
      music: any[];
      study: any[];
    };
  };
  effects: {
    fetchTask: Effect;
  };
  reducers: {
    setTaskList: any;
  };
}
const TasksModel: TasksModel = {
  namespace: 'tasks',

  state: {
    list: {
      music: [],
      study: [],
    },
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
        payload: {
          type: payload.type,
          data: Array.isArray(data) ? data : [],
        },
      });
    },
  },

  reducers: {
    setTaskList(state: any, { payload }: any) {
      const { type, data } = payload;
      return {
        list: {
          ...state.list,
          [type]: data,
        },
      };
    },
  },
};

export default TasksModel;
