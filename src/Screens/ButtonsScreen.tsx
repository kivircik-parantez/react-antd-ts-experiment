import { PoweroffOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space, Tooltip } from "antd";
import React, { useState } from "react";
import DangerButton from "../UIComponents/Buttons/DangerButton";
import DefaultButton from "../UIComponents/Buttons/DefaultButton";
import InfoButton from "../UIComponents/Buttons/InfoButton";
import LinkButton from "../UIComponents/Buttons/LinkButton";
import SuccessButton from "../UIComponents/Buttons/SuccessButton";
import WarningButton from "../UIComponents/Buttons/WarningButton";

const onMenuClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};

const items = [
  {
    key: "1",
    label: "1st item",
  },
  {
    key: "2",
    label: "2nd item",
  },
  {
    key: "3",
    label: "3rd item",
  },
];
const ButtonsScreen: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Space direction="vertical">
      <Space wrap>
        <Button type="primary">Primary Button</Button>
        <DefaultButton type="dashed">Dashed Button</DefaultButton>
        <DefaultButton type="text">Text Button</DefaultButton>
        <LinkButton>Link Button</LinkButton>
      </Space>
      <Space wrap>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<StarOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<StarOutlined />}>
          Search
        </Button>
        <Tooltip title="search">
          <DefaultButton shape="circle" icon={<StarOutlined />} />
        </Tooltip>
        <DefaultButton icon={<StarOutlined />}>Search</DefaultButton>
      </Space>
      <Space wrap>
        <Tooltip title="search">
          <DefaultButton shape="circle" icon={<StarOutlined />} />
        </Tooltip>
        <DefaultButton icon={<StarOutlined />}>Search</DefaultButton>
        <Tooltip title="search">
          <DefaultButton type="dashed" shape="circle" icon={<StarOutlined />} />
        </Tooltip>
        <DefaultButton type="dashed" icon={<StarOutlined />}>
          Search
        </DefaultButton>
        <DefaultButton icon={<StarOutlined />} href="https://www.google.com" />
      </Space>
      <Space wrap>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Space>

      <Space wrap>
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => enterLoading(0)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        />
      </Space>
      <Space>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
      </Space>
      <Space>
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
      </Space>
      <Space>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>
          Dashed(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="text">Text</Button>
        <Button type="text" disabled>
          Text(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="link">Link</Button>
        <Button type="link" disabled>
          Link(disabled)
        </Button>
      </Space>
      <Space>
        <Button danger>Danger Default</Button>
        <Button danger disabled>
          Danger Default(disabled)
        </Button>
      </Space>
      <Space>
        <Button danger type="text">
          Danger Text
        </Button>
        <Button danger type="text" disabled>
          Danger Text(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="link" danger>
          Danger Link
        </Button>
        <Button type="link" danger disabled>
          Danger Link(disabled)
        </Button>
      </Space>
      <Space className="site-button-ghost-wrapper">
        <Button ghost>Ghost</Button>
        <Button ghost disabled>
          Ghost(disabled)
        </Button>
      </Space>

      <Space>
        <Button type="primary">primary</Button>
        <Button>secondary</Button>
        <Dropdown.Button menu={{ items, onClick: onMenuClick }}>
          Actions
        </Dropdown.Button>
      </Space>
      <Space wrap>
        <Button type="primary" danger>
          Primary
        </Button>
        <Button danger>Default</Button>
        <Button type="dashed" danger>
          Dashed
        </Button>
        <Button type="text" danger>
          Text
        </Button>
        <Button type="link" danger>
          Link
        </Button>
      </Space>
      <Space wrap>
        <Button type="primary">Primary</Button>
        <DefaultButton>Default Button</DefaultButton>
        <WarningButton />
        <SuccessButton />
        <DangerButton />
        <InfoButton />
      </Space>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Button type="primary" block>
          Primary
        </Button>
        <Button block>Default</Button>
        <Button type="dashed" block>
          Dashed
        </Button>
        <Button type="link" block>
          Link
        </Button>
      </Space>
      <Space className="site-button-ghost-wrapper" wrap>
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>
          Dashed
        </Button>
        <Button type="primary" danger ghost>
          Danger
        </Button>
      </Space>
    </Space>
  );
};

export default ButtonsScreen;
