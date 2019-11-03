import request from '../utils/request';
import { stringify } from 'qs';

export interface IFetchTask {
  path: string;
}

export interface IOpenFile {
  path: string;
  fileName: string;
}

export async function fetchTask(params: IFetchTask) {
  return request(`/api/fetch-folder?${stringify(params)}`, {});
}

export async function openFileWithDefault(params: any) {
  return request('/api/openFile-withDefault', {
    method: 'POST',
    body: { ...params },
  });
}
