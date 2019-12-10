import request from '../utils/request';
import { stringify } from 'qs';

export interface IFetchTask {
  taskType: 'music' | 'study';
}

export async function fetchTask(params: IFetchTask) {
  return request(`/api/fetch-task?${stringify(params)}`, {});
}

export async function fetchPanel() {
  return request(`/api/fetch-panel`, {});
}
