import request from '../utils/request';
import { stringify } from 'qs';

export interface IFetchFolder {
  path: string;
}

export interface IOpenFile {
  path: string;
  fileName: string;
}

export async function fetchFolder(params: IFetchFolder) {
  return request(`/api/fetch-folder?${stringify(params)}`, {});
}

export async function openFileWithDefault(params: any) {
  return request('/api/openFile-withDefault', {
    method: 'POST',
    body: { ...params },
  });
}
