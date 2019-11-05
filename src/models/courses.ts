import { message } from 'antd';
import { fetchFolder, openFileWithDefault } from '../services/courses';
import { Effect } from 'dva';

export interface CoursesModel {
  namespace: string;
  state: {
    list: string[];
  };
  effects: {
    fetchFolder: Effect;
    openFileWithDefault: Effect;
  };
  reducers: {
    setCoursesList: any;
  };
}
const CoursesModel: CoursesModel = {
  namespace: 'courses',

  state: {
    list: [],
  },

  effects: {
    *fetchFolder({ payload }, { call, put }) {
      const response = yield call(fetchFolder, payload);
      const { code, msg, data } = response || { code: 502 };
      if (code !== 0) {
        message.error(`获取文件夹列表失败：${msg}`);
      }
      yield put({
        type: 'setCoursesList',
        payload: Array.isArray(data) ? data : [],
      });
    },
    *openFileWithDefault({ payload }, { call, put }) {
      const response = yield call(openFileWithDefault, payload);
      const { code, msg } = response || { code: 502 };
      if (code !== 0) {
        message.error(`打开文件失败：${msg}`);
      }
    },
  },

  reducers: {
    setCoursesList(_, { payload }) {
      return {
        list: payload,
      };
    },
  },
};

export default CoursesModel;
