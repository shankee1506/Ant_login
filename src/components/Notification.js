import { CloseOutlined } from "@ant-design/icons";
import { Divider, Drawer } from "antd";
import React from "react";

function Notifications(props) {
  return (
    <Drawer
      closable={false}
      placement="right"
      onClose={props.onClose}
      visible={props.visible}
    >
      <div className="flex justify-between items-center">
        <div className="text-lg pri-font">Notifications</div>
        <CloseOutlined onClick={() => props.onClose()} />
      </div>
      <Divider />
      <div className="">
        <div className="text-xs mb-1">10 min ago</div>This is a new notification
      </div>
      <Divider />
      <div className="">
        <div className="text-xs mb-1">15 min ago</div>This is a new notification
      </div>
      <Divider />
      <div className="">
        <div className="text-xs mb-1">20 min ago</div>This is a new notification
      </div>
      <Divider />
    </Drawer>
  );
}

export default Notifications;
