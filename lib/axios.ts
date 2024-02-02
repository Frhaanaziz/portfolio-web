import { env } from '@/env.mjs';
import axios from 'axios';

export function getBackendApi(token?: string, params?: any) {
  return axios.create({
    baseURL: env.BACKEND_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    params,
  });
}
