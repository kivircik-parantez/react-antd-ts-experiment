import { Button, theme } from "antd";
import React from "react";
const { useToken } = theme;

const InfoButton: React.FC = () => {
  const { token } = useToken();

  return (
    <Button
      style={{
        backgroundColor: token.colorInfoBg,
        borderColor: token.colorInfoBorder,
        color: token.colorInfo,
      }}
    >
      Info Default
    </Button>
  );
};

export default InfoButton;
