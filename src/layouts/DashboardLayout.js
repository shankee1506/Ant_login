import React, { useEffect, useState } from "react";
import { Drawer, Layout } from "antd";
import { Outlet } from "react-router-dom";
import DashboardSideMenu from "../components/layout/DashboardSideMenu";
import DashboardHeader from "../components/layout/DashboardHeader";
import DashboardBreadcrumb from "../components/layout/DashboardBreadcrumb";

import Theme from "../theme/Theme";

const { Content, Sider } = Layout;

function DashboardLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  const proHeight = document.body.clientHeight;
  const proWidth = document.body.clientWidth;

  useEffect(() => {
    /*In tab view collapse menu when loaded*/
    if (proWidth < 720) {
      setCollapsed(true);
    }
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/*Main side menu*/}
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        breakpoint="lg"
        style={{
          height: "100vh",
          overflow: "hidden",
        }}
        className="transparent-scroll hidden sm:block th-bg-side-menu"
      >
        <div className="logo" />
        <DashboardSideMenu />
      </Sider>

      {/*Mobile side menu*/}
      <Drawer
        width="280"
        closable={false}
        placement="left"
        onClose={() => setCollapsed(true)}
        visible={!collapsed}
        className="sm:hidden "
        style={{ padding: 0 }}
        bodyStyle={{ backgroundColor: Theme().sideMenu, padding: 0 }}
      >
        <div className="logo" />
        <DashboardSideMenu />
      </Drawer>
      <Layout className="site-layout">
        <DashboardHeader
          openMenu={() => setCollapsed(!collapsed)}
          menu={collapsed}
        />
        <Content style={{ backgroundColor: "#fff" }}>
          <DashboardBreadcrumb />
          <div
            style={{
              height: proHeight - 122,
              overflow: "auto",
            }}
            className="custom-scroll p-6"
          >
            <Outlet />
            {/* <DashboardFooter /> */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
