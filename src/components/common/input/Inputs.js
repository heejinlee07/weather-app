import React from "react";
import { InputUi } from "./Inputs.styles";

const Inputs = ({ children, ...rest }) => {
  return <InputUi {...rest}>{children}</InputUi>;
};

export default Inputs;
