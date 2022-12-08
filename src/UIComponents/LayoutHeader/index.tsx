import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

interface IProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}
const LayoutHeader = ({ collapsed, setCollapsed }: IProps): ReactElement => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  );
};

export default LayoutHeader;
