import axios from 'axios';
import { string } from 'yup';

export const otusApi = axios.create({
  baseURL: 'http://19429ba06ff2.vps.myjino.ru/api',
});

otusApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function fetchProfile(): Promise<{ email: string; commandId: string; signUpDate: string }> {
  const res = await otusApi.get('/profile');
  return res.data;
}

export async function updateProfileFieldApi(field: 'email' | 'commandId', value: string) {
  return otusApi.patch('/profile', { [field]: value });
}

export async function registerUser(email: string, password: string): Promise<string> {
  const response = await otusApi.post('/signup', { email, password, 'vladynush-team': string });
  return response.data.token; // возвращает JWT
}

export async function loginUser(email: string, password: string): Promise<string> {
  const response = await otusApi.post('/signin', { email, password });
  return response.data.token;
}
