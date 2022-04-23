import axios, { AxiosRequestConfig } from 'axios';

const CallApi = async ({ method, url, data }:AxiosRequestConfig) => {
  try {
    const baseURL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/api';
    const response = await axios({
      method, url, baseURL, data,
    });
    const res = ({
      status: 'success',
      message: 'successfully',
      data: response.data.data,
    });
    return res;
  } catch (error:any) {
    const res = ({
      status: 'failed',
      message: error.message,
      data: [],
    });
    return res;
  }
};
export default CallApi;
