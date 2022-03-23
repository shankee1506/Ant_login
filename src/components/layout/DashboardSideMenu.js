import { Menu } from "antd";
import React from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  TableOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";

function DashboardSideMenu() {
  const proHeight = document.body.clientHeight;

  return (
    <Menu
      style={{
        height: proHeight - 64,
        overflow: "auto",
      }}
      className="transparent-scroll th-bg-side-menu"
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
    >
      <Menu.Item key="1" icon={<PieChartOutlined />}>
      <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<TableOutlined />}>
      <Link to="/table">Table</Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9" icon={<FileOutlined />}>
        Files
      </Menu.Item>
    </Menu>
  );
}

export default DashboardSideMenu;
