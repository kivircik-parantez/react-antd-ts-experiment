import { Button, ButtonProps, theme } from "antd";
import React from "react";
const { useToken } = theme;

interface IProps extends ButtonProps {
  dark?: boolean;
}

const SuccessButton: React.FC<IProps> = (props) => {
  const { token } = useToken();

  return (
    <Button
      style={{
        backgroundColor: props.dark
          ? token.colorSuccess
          : token.colorBgContainer,
        borderColor:
          props.type === "text" || props.type === "link"
            ? ""
            : token.colorSuccessBorder,
        color: props.dark ? token.colorBgContainer : token.colorSuccess,
      }}
      {...props}
    />
  );
};

export default SuccessButton;
