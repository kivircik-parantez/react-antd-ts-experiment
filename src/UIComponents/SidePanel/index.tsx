import { DesktopOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Image, Layout, Menu } from "antd";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BUTTONS_ROUTE, DATASHEET_ROUTE, TYPOGRAPHY_ROUTE } from "../../routes";
import "./index.scss";
const { Sider } = Layout;
interface IProps {
  collapsed: boolean;
}
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
    <Link to={BUTTONS_ROUTE}>
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

const SidePanel = (props: IProps): ReactElement => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
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
