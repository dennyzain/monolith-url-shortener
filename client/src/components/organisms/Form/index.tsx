import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { DataProps } from '../../../@types';
import CallApi from '../../utils/CallApi';

const FormItem :React.FC = () => {
  const [fullUrl, setFullUrl] = useState<string>('');
  const onHandleChange = ({ currentTarget }:React.FormEvent<HTMLInputElement>) => setFullUrl(currentTarget.value);
  const isValidUrl = (url:string) => {
    try {
      const valid = new URL(url);
      if (valid) { return true; }
    } catch (e) {
      return false;
    }
    return true;
  };
  const onHandleSubmit = async () => {
    try {
      if (fullUrl !== '') {
        if (!isValidUrl(fullUrl) || new URL(fullUrl).origin === 'http://localhost:3000/') {
          toast.error('link URL is not valid!');
          return;
        }
      } else {
        toast.error('link URL is not exist!');
        return;
      }
      const res = await CallApi({ method: 'POST', url: '/short-url', data: { fullUrl } });
      if (res.status === 'failed') {
        toast.error(res.message);
        return;
      }
      const exist = localStorage.getItem('data-shortener-url');
      const data:Array<DataProps> = [];
      if (exist) {
        const parsing = JSON.parse(exist);
        parsing.push(res.data);
        localStorage.setItem('data-shortener-url', JSON.stringify(parsing));
        return;
      }
      data.push(res.data);
      localStorage.setItem('data-shortener-url', JSON.stringify(data));
    } catch (error) {
      toast.error((error as Error).message);
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
