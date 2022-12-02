import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Image, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-small.jpg";
import { DATASHEET_ROUTE, HOME_ROUTE, TYPOGRAPHY_ROUTE } from "../../routes";
import "./index.css";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Buttons",
    "1",
    <Link to={HOME_ROUTE}>
      <DesktopOutlined />
    </Link>
  ),
  getItem(
    "Typography",
    "2",
    <Link to={TYPOGRAPHY_ROUTE}>
      <UserOutlined />
    </Link>
  ),
  getItem(
    "Datasheet",
    "sub1",
    <Link to={DATASHEET_ROUTE}>
      <TeamOutlined />
    </Link>
  ),
];

const SidePanel: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Image src={logo} width={80} />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default SidePanel;
