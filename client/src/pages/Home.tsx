import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Layout, PageHeader } from 'antd';
import { ToastContainer } from 'react-toastify';
import MainContent from '../components/organisms/MainContent';
import FooterItem from '../components/organisms/Footer';

const Home:React.FC = () => (
  <Layout className="container" style={{ minHeight: '100vh' }}>
    <PageHeader title="URL Shortener" subTitle="shorting your link" />
    <MainContent />
    <FooterItem />
    <ToastContainer />
  </Layout>
);
export default Home;
