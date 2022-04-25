import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import ListContent from '../Table';
import FormItem from '../Form';

const MainContent: React.FC = () => (
  <Content style={{ margin: '0 10px', justifySelf: 'center' }}>
    <FormItem />
    <ListContent />
  </Content>
);

export default MainContent;
