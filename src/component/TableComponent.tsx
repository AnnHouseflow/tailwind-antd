// @ts-nocheck

import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Radio, Table, Button, Input } from 'antd';
import Highlighter from 'react-highlight-words';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
    showSorterTooltip: {
      target: 'full-header',
    },
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['ascend','descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['ascend','descend'],
  },
  {
    title: 'Gentle',
    dataIndex: 'gentle',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    responsive: ['md'],
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    gentle:'Male',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    gentle: 'Female',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    gentle:'Male',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    gentle: 'Female',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '5',
    name: 'Joy Phillips',
    age: 20,
    gentle: 'Female',
    address: '3893 W Belt Line Rd',
  },
  {
    key: '6',
    name: 'Clifton Rice',
    age: 44,
    gentle: 'Male',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '7',
    name: 'Kyle Hamilton',
    age: 12,
    gentle: 'Male',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '8',
    name: 'Leon Armstrong',
    age: 9,
    gentle: 'Male',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '9',
    name: 'Megan Peck',
    age: 58,
    gentle: 'Female',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '10',
    name: 'Alicia Herrera',
    age: 89,
    gentle: 'Female',
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '11',
    name: 'Noelle Lee',
    age: 45,
    gentle: 'Female',
    address: 'Sydney No. 1 Lake Park',
  },
];


const TableComponent = () => {
  const [checkList, setCheckList] = useState([]);

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setCheckList((prev) => [...selectedRows]);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div>
      <ul className='flex gap-1'>
        {
          checkList.map((item, index) => {
            return <li key={index} className="py-1 px-3 bg-medium rounded-2xl">{item.name}</li>
          })
        }
      </ul>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 2 }}
      />

    </div>
  );
};
export default TableComponent;