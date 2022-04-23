import React, { useCallback, useEffect, useState } from 'react';
import { Layout, Spin } from 'antd';
import {
  useNavigate, useParams,
} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { DataProps } from '../../../@types';
import CallApi from '../../utils/CallApi';

const HandleRedirects: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<DataProps | null>(null);
  const { shortId } = useParams<{ shortId: string }>();
  const fetch = useCallback(async () => {
    try {
      const res = await CallApi({ method: 'GET', url: `/${shortId}` });
      res.status !== 'failed' ? setState(res.data) : setState(null);
    } catch (error) {
      toast.error(error instanceof Error);
    }
  }, []);
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    state !== null ? window.location.replace(state.fullUrl) : window.setTimeout(() => navigate('/'), 4000);
  }, [state]);

  if (state === null) {
    return (
      <Layout
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Spin size="large" tip={<h1>link not found! we will comeback to homepage</h1>} />
        <ToastContainer />
      </Layout>
    );
  }

  return (
    <Layout
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Spin size="large" tip={<h1> redirecting...</h1>} />
      <ToastContainer />
    </Layout>
  );
};

export default HandleRedirects;
