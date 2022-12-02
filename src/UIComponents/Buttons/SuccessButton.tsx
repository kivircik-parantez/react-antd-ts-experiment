import { Button, ButtonProps, theme } from "antd";
import React from "react";
import styles from "./index.module.scss";
const { useToken } = theme;

interface IProps extends ButtonProps {
  secondary?: boolean;
  warning?: boolean;
}

const SuccessButton: React.FC<IProps> = (props) => {
  const { token } = useToken();

  return (
    <Button
      style={{
        backgroundColor: props.secondary
          ? token.colorSuccess
          : token.colorBgContainer,
        borderColor:
          props.type === "text" || props.type === "link"
            ? ""
            : token.colorSuccessBorder,
        color: props.secondary ? token.colorBgContainer : token.colorSuccess,
      }}
      {...props}
    />
  );
};

export default SuccessButton;
