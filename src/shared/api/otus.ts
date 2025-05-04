import axios from 'axios';
import { string } from 'yup';

export const otusApi = axios.create({
  baseURL: 'http://19429ba06ff2.vps.myjino.ru/api',
});

export async function registerUser(email: string, password: string): Promise<string> {
  const response = await otusApi.post('/signup', { email, password, 'vladynush-team': string });
  return response.data.token; // возвращает JWT
}

export async function loginUser(email: string, password: string): Promise<string> {
  const response = await otusApi.post('/signin', { email, password });
  return response.data.token;
}
