import { Button, theme } from "antd";
import React from "react";
const { useToken } = theme;

const SuccessButton: React.FC = () => {
  const { token } = useToken();

  return (
    <Button
      style={{
        backgroundColor: token.colorSuccessBg,
        borderColor: token.colorSuccessBorder,
        color: token.colorSuccess,
      }}
    >
      Success Button
    </Button>
  );
};

export default SuccessButton;
