import { Footer } from 'antd/lib/layout/layout';
import React from 'react';

const FooterItem:React.FC = () => (
  <Footer style={{ textAlign: 'center', fontSize: '12px' }}>
    {' '}
    &copy; 2021-
    {new Date().getFullYear()}
    {' '}
    Made with
    &#128525;
    by Denny Abbas Zain

  </Footer>
);

export default FooterItem;
