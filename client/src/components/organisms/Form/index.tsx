import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CallApi from '../../utils/CallApi';

const FormItem :React.FC = () => {
  const [fullUrl, setFullUrl] = useState<string>('');
  const onHandleChange = ({ currentTarget }:React.FormEvent<HTMLInputElement>) => setFullUrl(currentTarget.value);
  const isValidUrl = (url:string) => {
    try {
      const validUrl = new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  };
  const onHandleSubmit = async () => {
    try {
      if (fullUrl !== '') {
        if (!isValidUrl(fullUrl)) {
          toast.error('link url not valid!');
          return;
        }
      } else {
        toast.error('link URL is not exist!');
        return;
      }
      await CallApi({ method: 'post', url: '/short-url', data: { fullUrl } });
    } catch (error) {
      toast.error(error instanceof Error);
    }
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
