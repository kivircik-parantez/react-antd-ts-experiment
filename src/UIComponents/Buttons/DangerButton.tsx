import { Button, ButtonProps, theme } from "antd";
import React from "react";

interface IProps extends ButtonProps {}

const DangerButton: React.FC<IProps> = (props) => {
  return (
    <Button danger {...props}>
      Danger Default
    </Button>
  );
};

export default DangerButton;
