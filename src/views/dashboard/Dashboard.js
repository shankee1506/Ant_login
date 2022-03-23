import React from 'react'
import GraphDualline from '../../components/layout/GraphDualline'
import { Row, Col, Divider } from 'antd';
import GraphPie from '../../components/layout/GraphPie';
import { Card, Space } from 'antd';

const Dashboard = () => {
  return (
    

    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={16}>
        <Card title="Total Revenue" bordered={true}>
        <GraphDualline/>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Customers" bordered={true}>
        <GraphPie />
        </Card>
      </Col>

    </Row>
  </div>

    
  )
}

export default Dashboard