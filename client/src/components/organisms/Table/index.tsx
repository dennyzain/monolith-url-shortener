import React, { useCallback, useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import moment from 'moment';
import CallApi from '../../utils/CallApi';
import { DataProps } from '../../../@types';

const baseUrl:string = process.env.REACT_APP_URL || 'http://localhost:3000';

const columns = [
  {
    title: 'Full URL',
    dataIndex: 'fullUrl',
    key: 'fullUrl',
  },
  {
    title: 'Short URL',
    dataIndex: 'shortUrl',
    key: 'shortUrl',
  },
  {
    title: 'Viewed',
    dataIndex: 'click',
    key: 'click',
  },
  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
    sortDirection: ['ascend', 'descend'],
    sorter: (a:DataProps, b:DataProps) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf(),
    render: (text:string) => moment(text).fromNow(),
  }, {
    title: 'Action',
    dataIndex: 'shortUrl',
    key: 'shortUrl',
    render: (text:string, record:DataProps, index:number) => {
      const onCopy = () => {
        navigator.clipboard.writeText(`${baseUrl}/${text}`);
      };
      return (<Button key={index} onClick={onCopy}>Copy Link</Button>);
    },
  },
];

const ListContent:React.FC = () => {
  const [data, setData] = useState([]);

  const fetch = useCallback(async () => {
    const res = await CallApi({ method: 'get', url: '/' });
    setData(res.data);
  }, []);

  useEffect(() => {
    fetch();
  }, [data]);

  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={data}
      scroll={{ x: true }}
      size="small"
      onChange={(pagination, filters, sorter, extra) => [pagination, filters, sorter, extra]}
    />
  );
};
export default ListContent;
