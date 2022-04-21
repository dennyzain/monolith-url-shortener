import React from 'react';
import './styles/App.css';
import { Layout, PageHeader } from 'antd';
import MainContent from './components/organisms/MainContent';
import FooterItem from './components/organisms/Footer';

const App:React.FC = () => (
  <Layout className="container" style={{ minHeight: '100vh' }}>
    <PageHeader title="URL Shortener" subTitle="shorting your url web" />
    <MainContent />
    <FooterItem />
  </Layout>
);

export default App;
