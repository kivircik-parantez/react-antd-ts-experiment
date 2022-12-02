import { Button, theme } from "antd";
import React from "react";
const { useToken } = theme;

const WarningButton: React.FC = () => {
  const { token } = useToken();

  return (
    <Button
      style={{
        backgroundColor: token.colorWarningBg,
        borderColor: token.colorWarningBorder,
        color: token.colorWarning,
      }}
    >
      Warning Button
    </Button>
  );
};

export default WarningButton;
