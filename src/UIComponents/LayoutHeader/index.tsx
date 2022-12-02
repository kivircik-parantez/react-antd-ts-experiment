import { Layout, Menu } from "antd";
import React from "react";

const { Header } = Layout;

const LayoutHeader: React.FC = () => (
  <Header>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={new Array(15).fill(null).map((_, index) => {
        const key = index + 1;
        return {
          key,
          label: `nav ${key}`,
        };
      })}
    />
  </Header>
);

export default LayoutHeader;
