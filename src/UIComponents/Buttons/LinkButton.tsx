import { Button, ButtonProps, theme } from "antd";
import React from "react";
const { useToken } = theme;
interface IProps extends ButtonProps {}
const LinkButton: React.FC<IProps> = (props) => {
  const { token } = useToken();
  return (
    <Button
      {...props}
      type={"link"}
      style={{
        color: token.colorPrimary,
      }}
    />
  );
};

export default LinkButton;
