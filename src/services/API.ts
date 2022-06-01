import axios from 'axios';
import Config from 'react-native-config';

export const instance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
