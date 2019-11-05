export interface IDataSource {
  task: string;
  execTime: string;
  descOrNum: string;
  key: string | number;
  status: 'done' | 'doing';
}

export const TASK_TABLE_TYPE = ['music', 'study'];
