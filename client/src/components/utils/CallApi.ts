import axios, { AxiosRequestConfig } from 'axios';

const CallApi = async ({ method, url, data }:AxiosRequestConfig) => {
  const baseURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/api';
  const res = await axios({
    method, url, baseURL, data,
  }).then((response) => ({
    status: 'success',
    message: 'successfully',
    data: response.data.data,
  })).catch((error) => ({
    status: 'failed',
    message: error.response.data.message,
    data: [],
  }));
  return res;
};

export default CallApi;
