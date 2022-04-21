import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import CallApi from '../../utils/CallApi';

const FormItem :React.FC = () => {
  const [fullUrl, setFullUrl] = useState('');
  const onHandleChange = ({ currentTarget }:React.FormEvent<HTMLInputElement>) => setFullUrl(currentTarget.value);
  const onHandleSubmit = async () => {
    if (fullUrl === '') {
      console.log('form input must be exist');
      return;
    }
    await CallApi({ method: 'post', url: '/short-url', data: { fullUrl } });
  };

  return (
    <Form style={{ margin: 'auto', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form.Item
          id="url"
          style={{ width: '80%' }}
        >
          <Input type="url" size="large" placeholder="Your URL" onChange={onHandleChange} />
        </Form.Item>
        <Form.Item htmlFor="url" style={{ margin: '0 5px' }}>
          <Button type="primary" htmlType="submit" size="large" onClick={onHandleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default FormItem;
