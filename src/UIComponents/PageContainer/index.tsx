import { Layout, Popover } from "antd";
import { PropsWithChildren, ReactElement, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import LayoutHeader from "../LayoutHeader";
import SidePanel from "../SidePanel";
import "./index.scss";

const { Content } = Layout;

interface IProps extends PropsWithChildren {}
const PageContainer = (props: IProps): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      hasSider
      style={{ marginLeft: collapsed ? 80 : 200, transition: "0.25s" }}
    >
      <SidePanel collapsed={collapsed} />
      <Layout className="site-layout">
        <LayoutHeader setCollapsed={setCollapsed} collapsed={collapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default PageContainer;
