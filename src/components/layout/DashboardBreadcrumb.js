import { Breadcrumb, Button, Tooltip } from "antd";
import React from "react";
import {
  HomeOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

function DashboardBreadcrumb() {
  return (
    <div
      className="shadow-sm border-b"
      style={{ padding: "12px 24px", backgroundColor: "#fff" }}
    >
      <div className="flex justify-between items-center h-8">
        <div className="pri-font text-lg">Dashboard</div>
        <div>
          <Tooltip title={"Settings"}>
            <Button className="mr-3">
              <SettingOutlined />
            </Button>
          </Tooltip>
          <Tooltip title={"Help"}>
            <Button className="mr-3">
              <QuestionCircleOutlined />
            </Button>
          </Tooltip>
          <Tooltip title={"Add"}>
            <Button
              shape="circle"
              type="primary"
              icon={<PlusOutlined />}
            ></Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default DashboardBreadcrumb;
