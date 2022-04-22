import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';
import { Layout, PageHeader } from 'antd';
import { ToastContainer } from 'react-toastify';
import MainContent from './components/organisms/MainContent';
import FooterItem from './components/organisms/Footer';

const App:React.FC = () => (
  <Layout className="container" style={{ minHeight: '100vh' }}>
    <PageHeader title="URL Shortener" subTitle="shorting your url web" />
    <MainContent />
    <FooterItem />
    <ToastContainer />
  </Layout>
);

export default App;
