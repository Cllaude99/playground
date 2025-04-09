import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const instance = axios.create({
  baseURL: BACKEND_URL,
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
  timeout: 4000,
  withCredentials: true,
});

// token 재발급 함수
const getNewToken = async () => {
  try {
    const refreshToken = '';

    if (!refreshToken) {
      // 관련 정보 삭제 필요
      window.location.href = '/';
      return;
    }

    const response = await axios.get('', {
      headers: {
        'Authorization-refresh': `Bearer ${refreshToken}`,
      },
    });

    const { accessToken, refreshToken: newRefreshToken } = response.data.data;
    return { accessToken, refreshToken: newRefreshToken };
  } catch (e) {
    // 관련 정보 삭제 필요
    window.location.href = '/';
    return;
  }
};

instance.interceptors.request.use(
  (config) => {
    const accessToken = '';

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;
    //  402에러가 아니거나 재요청이거나 refresh 요청인 경우 그냥 에러 발생
    if (response?.status !== 402 || config.sent || config.url === '') {
      return Promise.reject(error);
    }

    config.sent = true; // 무한 재요청 방지를 위한 코드

    const newToken = await getNewToken();

    if (newToken?.accessToken && newToken?.refreshToken) {
      // 새로운 토큰 관련 정보 저장 필요
      config.headers.Authorization = `Bearer ${newToken.accessToken}`;
      return instance(config); // 재요청
    }

    return Promise.reject(error);
  },
);
