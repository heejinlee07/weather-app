import React from "react";
import { ButtonUi } from "./Buttons.styles";

const Buttons = ({ children, ...rest }) => {
  return <ButtonUi {...rest}>{children}</ButtonUi>;
};

export default Buttons;
