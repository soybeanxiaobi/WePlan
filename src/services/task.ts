import request from '../utils/request';
import { stringify } from 'qs';

export interface IFetchTask {
  path: string;
}

export async function fetchTask(params: IFetchTask) {
  return request(`/api/fetch-folder?${stringify(params)}`);
}
