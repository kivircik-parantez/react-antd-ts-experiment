import { Breadcrumb, Layout } from "antd";
import "antd/dist/reset.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { DATASHEET_ROUTE, HOME_ROUTE, TYPOGRAPHY_ROUTE } from "./routes";
import ButtonsScreen from "./Screens/ButtonsScreen";
import TypographyScreen from "./Screens/Typography";
import EditableDataSheetGrid from "./UIComponents/EditableDataSheetGrid";
import LayoutHeader from "./UIComponents/LayoutHeader";
import SidePanel from "./UIComponents/SidePanel";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <SidePanel />
        <Layout className="site-layout">
          <LayoutHeader />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes>
                <Route path={HOME_ROUTE} element={<ButtonsScreen />}></Route>
                <Route
                  path={TYPOGRAPHY_ROUTE}
                  element={<TypographyScreen />}
                ></Route>
                <Route
                  path={DATASHEET_ROUTE}
                  element={<EditableDataSheetGrid />}
                ></Route>
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
