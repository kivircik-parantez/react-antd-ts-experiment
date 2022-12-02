import { Button, ButtonProps, theme } from "antd";
import React from "react";
const { useToken } = theme;
interface IProps extends ButtonProps {}
const DefaultButton: React.FC<IProps> = (props) => {
  const { token } = useToken();
  return (
    <Button
      {...props}
      style={{
        backgroundColor: token.colorBgContainer,
        borderColor: token.colorBorder,
        color: token.colorPrimary,
      }}
    />
  );
};

export default DefaultButton;
