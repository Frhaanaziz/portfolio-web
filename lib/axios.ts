import axios from 'axios';
import { backendUrl } from './constant';

export function getBackendApi(token?: string, params?: any) {
  return axios.create({
    baseURL: backendUrl,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    params,
  });
}
