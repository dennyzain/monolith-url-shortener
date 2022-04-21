import React, { useCallback, useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import CallApi from '../utils/CallApi';

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
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
    // render: (text:string, record:any, index:number) => {

    // },
    // sorter: {
    //   compare: (a:number, b:number) => a - b,
    //   multiple: 2,
    // },
  }, {
    title: 'Action',
    dataIndex: 'shortUrl',
    key: 'shortUrl',
    render: (text:string, record:any, index:number) => {
      const onCopy = () => {
        navigator.clipboard.writeText(`${'http://localhost:5000'}/${text}`);
      };
      return (<Button key={index} onClick={onCopy}>Copy</Button>);
    },
  },
];

// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }
const ListContent:React.FC = () => {
  const [fetchData, setFetchData] = useState({ message: '', data: [], status: '' });
  const { data } = fetchData;

  const fetch = useCallback(async () => {
    const res = await CallApi({ method: 'get', url: '/' });
    setFetchData(res);
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Table
      rowKey="_id"
      columns={columns}
      dataSource={data}
      scroll={{ x: true }}
    />
  );
};
export default ListContent;
