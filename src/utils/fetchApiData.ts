import { AxiosRequestConfig } from 'axios';
import { instance } from '@/apis/instance';

export const fetchApiData = async <T, D = T>(option: AxiosRequestConfig<D>) => {
  try {
    const { data } = await instance<T>(option);
    return data;
  } catch (e) {
    throw e;
  }
};
