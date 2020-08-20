import styled from "styled-components";

export const InputUi = styled.input`
  width: ${(props) => props.InputWidth}px;
  background-color: ${(props) => props.InputColor || "white"};
  color: ${(props) => props.color || "black"};
  text-decoration: none;
  font-size: 16px;
  padding: ${(props) => props.InputPadding || 5}px;
  margin: ${(props) => props.InputMargin || 3}px;
  border-radius: ${(props) => props.InputBorderRad || 7}px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    border: 2px solid black;
  }
`;
