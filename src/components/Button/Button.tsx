import React from "react";

export interface ButtonProps {
  label: string;
}

const DHButton = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default DHButton;
