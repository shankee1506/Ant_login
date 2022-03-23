import { Avatar, Button, Dropdown, Menu, Tooltip } from "antd";
import { Header } from "antd/lib/layout/layout";
import {
  MenuFoldOutlined,
  BellOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  LogoutOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Notifications from "../Notification";
import Search from "antd/lib/input/Search";
import { Link, useNavigate } from "react-router-dom";
import Theme from "../../theme/Theme";

function DashboardHeader(props) {
  const [notifications, setNotifications] = useState(false);
  let navigate = useNavigate();

  function toSettings() {
    navigate("/settings");
  }

  const menu = (
    <Menu style={{ width: "280px" }}>
      <div className="p-2 text-center">
        <Avatar size={64} className="cursor-pointer">
          K
        </Avatar>
        <div className="text-base mt-1">User Name</div>
      </div>
      <Menu.Divider />
      <Menu.Item key="0">
        <div className="flex items-center">
          <UserOutlined className="w-4 mr-1" /> Your profile
        </div>
      </Menu.Item>
      <Menu.Item key="1">
        <div className="flex items-center">
          <SettingOutlined className="w-4 mr-1" /> Settings
        </div>
      </Menu.Item>
      <Menu.Item key="1">
        <div className="flex items-center">
          <QuestionCircleOutlined className="w-4 mr-1" /> Help and Support
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Link to="/login">
          <div className="flex items-center">
            <LogoutOutlined className="w-4 mr-1" /> Logout
          </div>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const search = (
    <Menu style={{ padding: "8px" }}>
      <Search placeholder="input search text" style={{ width: "100%" }} />
    </Menu>
  );

  return (
    <>
      <Header
        className="site-layout-background flex items-center border-b"
        style={{
          backgroundColor: "#fff",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div className="flex-1 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex h-full text-lg mr-3">
              {props.menu ? (
                <MenuUnfoldOutlined
                  className="th-pri-hover"
                  onClick={() => props.openMenu()}
                />
              ) : (
                <MenuFoldOutlined
                  className="th-pri-hover"
                  onClick={() => props.openMenu()}
                />
              )}
            </div>
            <div className="hidden md:flex h-full">
              <Search placeholder="input search text" style={{ width: 320 }} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex h-full md:hidden mr-3 sm:mr-5">
              <Dropdown
                placement="bottomRight"
                overlay={search}
                trigger={["click"]}
              >
                <SearchOutlined className="text-lg th-pri-hover" />
              </Dropdown>
            </div>
            <Tooltip title={"Notification"}>
              <BellOutlined
                onClick={() => setNotifications(true)}
                className="mr-3 sm:mr-5 text-lg th-pri-hover"
              />
            </Tooltip>

            {/* <Link to="/settings" className="flex"> */}
            <Tooltip title={"Settings"}>
              <SettingOutlined
                onClick={() => toSettings()}
                className="mr-3 sm:mr-5 text-lg th-pri-hover"
              />
            </Tooltip>
            {/* </Link> */}
            <Dropdown
              placement="bottomRight"
              overlay={menu}
              trigger={["click"]}
            >
              <Avatar size={"large"} className="cursor-pointer">
                K
              </Avatar>
            </Dropdown>
          </div>
        </div>
      </Header>
      <Notifications
        visible={notifications}
        onClose={() => setNotifications(false)}
      />
    </>
  );
}

export default DashboardHeader;
