import { PoweroffOutlined, StarOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space, Tooltip, Typography } from "antd";
import React, { useState } from "react";
import Button from "../UIComponents/Buttons/DefaultButton";
import DefaultButton from "../UIComponents/Buttons/DefaultButton";
import PageContainer from "../UIComponents/PageContainer";
const { Title } = Typography;

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
    <PageContainer>
      <Space direction="vertical">
        <Title level={4}>Primary and Defaults</Title>
        <Space wrap>
          <Button type="primary" size="large">
            Primary Button
          </Button>
          <Button type="danger">Primary Button</Button>

          {/* <LinkButton>Link Button</LinkButton> */}
        </Space>
        <Title level={4}>With Icons</Title>
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
            <DefaultButton
              type="dashed"
              shape="circle"
              icon={<StarOutlined />}
            />
          </Tooltip>
          <DefaultButton type="dashed" icon={<StarOutlined />}>
            Search
          </DefaultButton>
        </Space>
        <Title level={4}>With Loading</Title>
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
          <Button type="primary" disabled name="disabledButton">
            Primary(disabled)
          </Button>
        </Space>
        <Title level={4}>Disabled</Title>
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
        <Title level={4}>Ghost</Title>
        <Space className="site-button-ghost-wrapper">
          <Button ghost>Ghost</Button>
          <Button ghost disabled>
            Ghost(disabled)
          </Button>
        </Space>
        <Title level={4}>DropDown</Title>
        <Space>
          <Button type="primary">primary</Button>
          <Button>secondary</Button>
          <Dropdown.Button menu={{ items, onClick: onMenuClick }}>
            Actions
          </Dropdown.Button>
        </Space>
        <Title level={4}>Danger Button</Title>
        <Space wrap>
          <DefaultButton type="danger">Primary</DefaultButton>
          <DefaultButton danger>Default</DefaultButton>
          <DefaultButton type="dashed" danger>
            Dashed
          </DefaultButton>
          <DefaultButton type="text" danger>
            Text
          </DefaultButton>
        </Space>{" "}
        {/*
      <Title level={4}>Success Button</Title>
      <Space wrap>
        <SuccessButton type="primary">Primary</SuccessButton>
        <SuccessButton danger>Default</SuccessButton>
        <SuccessButton type="dashed">Dashed</SuccessButton>
        <SuccessButton type="text">Text</SuccessButton>
        <SuccessButton type="link">Link</SuccessButton>
        <SuccessButton secondary>Dark Success Button</SuccessButton>
      </Space>
      <Title level={4}>Wrapped Buttons</Title>
      <Space wrap>
        <Button type="primary">Primary</Button>
        <DefaultButton>Default Button</DefaultButton>
        <WarningButton />
        <SuccessButton>Success Button</SuccessButton>
        <SuccessButton secondary>Dark Success Button</SuccessButton>
        <DangerButton />
        <InfoButton />
      </Space> */}
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
    </PageContainer>
  );
};

export default ButtonsScreen;
