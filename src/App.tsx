import { Layout } from "antd";
import "antd/dist/reset.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./index.scss";
import { BUTTONS_ROUTE, DATASHEET_ROUTE, TYPOGRAPHY_ROUTE } from "./routes";
import ButtonsScreen from "./Screens/ButtonsScreen";
import Login from "./Screens/Login";
import TypographyScreen from "./Screens/Typography";
import EditableDataSheetGrid from "./UIComponents/EditableDataSheetGrid";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path={BUTTONS_ROUTE} element={<ButtonsScreen />}></Route>
        <Route path={TYPOGRAPHY_ROUTE} element={<TypographyScreen />}></Route>
        <Route
          path={DATASHEET_ROUTE}
          element={<EditableDataSheetGrid />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
