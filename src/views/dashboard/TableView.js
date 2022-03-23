import React, {useState} from 'react'
import { Table, Modal,Button, Checkbox } from 'antd'
import { tab } from '@testing-library/user-event/dist/tab';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];    
  
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

function TableView() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectRow, setSelectRow] = useState();

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

  return (
    <div>

    <div style={{ marginBottom: 16 }}>
    <Button type="primary" onClick={showModal} >
        Add
    </Button>
    </div>

    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

    <Table
    columns={columns}
    dataSource={data}
    rowSelection={{
        type:'checkbox',
        onSelect:(record)=>{
            console.log({record})
        },
        selections:[
            Table.SELECTION_ALL,
            Table.SELECTION_NONE,
            Table.SELECTION_INVERT
        ]
    }}
    
    >
    </Table>
    </div>
  )
}

export default TableView