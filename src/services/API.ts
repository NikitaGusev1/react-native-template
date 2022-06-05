import { AtomicParamList } from '../typescript';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Config } from 'react-native-config';

export class API {
  #instance: AxiosInstance;
  #defaultUrl: string;
  #token?: string;

  constructor(initUrl: string, params?: { token?: string }) {
    this.#defaultUrl = initUrl;
    this.#token = params?.token;
    this.#instance = this.getInstance();
  }

  private getInstance() {
    const instance = axios.create({ baseURL: this.#defaultUrl });
    instance.defaults.timeout = 20000;
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      return {
        ...config,
        headers: {
          ...config.headers,
          'Content-Type': 'application/json',
          Authorization: this.#token,
          'X-Requested-With': 'XMLHttpRequest',
        },
      };
    });

    instance.interceptors.response.use(this.onSuccess, this.onError);

    return instance;
  }

  private onSuccess(response: AxiosResponse<unknown>) {
    // Do something with response data
    return response;
  }

  private onError(error: unknown) {
    // Do something with response data
    return error;
  }

  private formatUrl<T extends AtomicParamList>(url: string, params: T): string {
    let q = url;
    for (const param in params) {
      q = q.replace(`{${param}}`, `${params[param]}`);
    }
    return q;
  }

  private formatQueryString<T extends AtomicParamList>(params: T): string {
    let query = '?';
    query += Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

    return query;
  }

  public getQueryString<T extends AtomicParamList>(params: T): string {
    return this.formatQueryString(params);
  }

  public getBaseUrl() {
    return this.#defaultUrl;
  }

  public getToken() {
    return this.#token;
  }

  public setToken(token: string, prefix: string = 'Bearer') {
    this.#token = `${prefix} ${token}`;
  }

  public clearToken() {
    this.#token = undefined;
  }

  public post = <T, U>(endpoint: string, params?: T) => {
    return this.#instance.post<U>(endpoint, params);
  };

  public get = <T extends AtomicParamList, U>(endpoint: string, params?: T) => {
    let url = endpoint;

    if (params) {
      url = this.formatUrl<T>(endpoint, params);
    }

    return this.#instance.get<U>(url);
  };

  public put = <T, U>(endpoint: string, params?: T) => {
    return this.#instance.put<U>(endpoint, params);
  };

  public patch = <T, U>(endpoint: string, params?: T) => {
    return this.#instance.put<U>(endpoint, params);
  };

  public delete = <T extends AtomicParamList, U>(
    endpoint: string,
    params?: T,
  ) => {
    let url = endpoint;

    if (params) {
      url = this.formatUrl<T>(endpoint, params);
    }

    return this.#instance.get<U>(url);
  };
}

export const api = {
  base: new API(Config.BASE_URL),
};
