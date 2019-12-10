import { message } from 'antd';
import { fetchTask, fetchPanel } from '../services/task';
import { Effect } from 'dva';

export interface TasksModel {
  namespace: string;
  state: {
    list: {
      music: any[];
      study: any[];
    };
    panel: {
      progress: any,
      doneNum: any,
      clockDay: any,
    };
  };
  effects: {
    fetchTask: Effect;
    fetchPanel: Effect;
  };
  reducers: {
    setTaskList: any;
    setTaskPanel: any;
  };
}
const TasksModel: TasksModel = {
  namespace: 'tasks',

  state: {
    list: {
      music: [],
      study: [],
    },
    panel: {
      progress: {},
      doneNum: {},
      clockDay: {},
    },
  },

  effects: {
    *fetchTask({ payload }, { call, put }) {
      const response = yield call(fetchTask, payload);
      const { code, msg, data } = response || { code: 502 };
      if (code !== 0) {
        message.error(`获取文件夹列表失败 ${msg}`);
      }
      yield put({
        type: 'setTaskList',
        payload: {
          type: payload.type,
          data: Array.isArray(data) ? data : [],
        },
      });
    },
    *fetchPanel({ payload }, { call, put }) {
      const response = yield call(fetchPanel, payload);
      const { code, msg, data } = response || { code: 502 };
      if (code !== 0) {
        message.error(`获取任务面板失败 ${msg}`);
      }
      yield put({
        type: 'setTaskPanel',
        payload: data,
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
    setTaskPanel(state: any, { payload }: any) {
      console.log('payload', payload);
      return {
        ...state,
        panel: { ...payload },
      };
    },
  },
};

export default TasksModel;
