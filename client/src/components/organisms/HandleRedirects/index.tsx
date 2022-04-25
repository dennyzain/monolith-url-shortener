import React, { useCallback, useEffect, useState } from 'react';
import { Layout, Spin } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { DataProps } from '../../../@types';
import CallApi from '../../utils/CallApi';

const HandleRedirects: React.FC = () => {
  const navigate = useNavigate();
  const { shortId } = useParams<{ shortId: string }>();
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<DataProps | null>({
    click: 0,
    createdAt: 0,
    fullUrl: '',
    shortUrl: '',
  });
  const fetch = useCallback(async () => {
    try {
      const res = await CallApi({ method: 'GET', url: `/${shortId}` });
      setState(res.data);
    } catch (err) {
      setError((err as Error).message);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (state && state?.fullUrl !== '' && error === null) {
      window.location.replace(state.fullUrl);
    } else {
      window.setTimeout(() => navigate('/'), 4000);
    }
  }, [state]);

  return (
    <Layout
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {state === null ? (
        <Spin size="large" tip={<h1> link not found! we will comeback to homepage</h1>} />
      ) : (
        <Spin size="large" tip={<h1> redirecting...</h1>} />
      )}
    </Layout>
  );
};

export default HandleRedirects;
