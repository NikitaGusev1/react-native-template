import { API, api } from '../services/API';
import { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';

interface IProps {
  withLoader?: boolean;
  withError?: boolean;
  apiInstance?: API;
}

export enum EEndpoints {
  SignIn = '/client/client/login',
  SignUp = '/client/client/registration',
  CheckCard = '/client/client/checkCardBeforeRegistration',
}

type Fetcher<T> = [string, T?];

type Request<R> = Promise<AxiosResponse<R>>;

export const useFetcher = ({
  withLoader = true,
  withError = false,
  apiInstance = api.base,
}: IProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message?: string; code?: string }>();

  const makeRequest = useCallback(
    async <R>(request: Request<R>) => {
      setIsLoading(true);
      let response: AxiosResponse<R> | null = null;
      let responseError;

      try {
        response = await Promise.resolve(request);
      } catch (e) {
        if (e instanceof Error) {
          if (withError) {
            setError({ message: e.message });
          }

          responseError = e.message;
        }

        console.log(e);
      } finally {
        setIsLoading(false);

        if (!response || responseError) {
          throw new Error(responseError || 'unknown error');
        }

        return response.data;
      }
    },
    [withError],
  );

  const fetcher = useCallback(
    <R = unknown, P = unknown>(...params: Fetcher<P>) => {
      const get = async () => {
        // @ts-ignore // TODO fix method types
        return await makeRequest<R>(apiInstance.get(...params));
      };

      const post = async () => {
        return await makeRequest<R>(apiInstance.post(...params));
      };

      const put = async () => {
        return await makeRequest<R>(apiInstance.put(...params));
      };

      const patch = async () => {
        return await makeRequest<R>(apiInstance.patch(...params));
      };

      const _delete = async () => {
        // @ts-ignore // TODO fix method types
        return await makeRequest<R>(apiInstance.delete(...params));
      };

      return { get, post, put, patch, delete: _delete };
    },
    [apiInstance, makeRequest],
  );

  return { error, fetcher, isLoading: withLoader ? isLoading : false };
};
