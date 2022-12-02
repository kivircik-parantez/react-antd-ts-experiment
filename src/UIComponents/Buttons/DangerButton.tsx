import { Button, ButtonProps } from "antd";
import React from "react";

interface IProps extends ButtonProps {}

const DangerButton: React.FC<IProps> = (props) => {
  return <Button danger {...props} />;
};

export default DangerButton;
