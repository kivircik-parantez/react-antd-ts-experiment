import React from "react";
import { Button as ButtonOriginal } from "antd";
import { ButtonProps as ButtonPropsOriginal } from "antd";
import "./index.scss";
type Mod<T, R> = Omit<T, keyof R> & R;
const customTypeArray = [
  "success",
  "warning",
  "info",
  "dark",
  "lightdark",
  "danger",
] as const;
const customWithArray = ["link", "dashed", "ghost"] as const;
export type ButtonType =
  | ButtonPropsOriginal["type"]
  | typeof customTypeArray[number];
type withProps = typeof customWithArray[number];
type ModButtonProps = Mod<
  ButtonPropsOriginal,
  {
    type?: ButtonType;
  }
>;

export type ButtonProps = ModButtonProps & {
  with?: withProps;
  style?: React.CSSProperties;
};

const styleButton = {
  dashed: {
    borderStyle: "dashed",
  },
  ghost: {
    borderStyle: "solid",
  },
  link: {
    borderStyle: "none",
    boxShadow: "none",
    borderColor: "transparent",
  },
};

const disableAnimation: string = "disable-animation";

const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const _isLink = props.with === "link";
  const _isDashed = props.with === "dashed";
  const _isGhost = props.with === "ghost";
  const _type: any = props.type;
  const _ghost: boolean =
    _isDashed || _isGhost || _isLink || props.ghost ? true : false;
  const _style = props.with ? styleButton[props.with] : undefined;
  const _linkStyle = _isLink ? disableAnimation : undefined;
  const _classes = [_linkStyle, props.className].filter((x) => !!x).join(" ");
  return (
    <ButtonOriginal
      {...props}
      ref={ref}
      className={_classes}
      style={{ ..._style, ...props.style }}
      ghost={_ghost}
      type={_type}
    >
      {props.children}
    </ButtonOriginal>
  );
});

export default Button;
