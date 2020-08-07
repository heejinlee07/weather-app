import styled from "styled-components";

export const ButtonUi = styled.div`
  height: ${(props) => props.btnHeight};
  width: ${(props) => props.btnWidth};
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.color || "black"};
  text-decoration: none;
  padding: 3px;
  margin: 3px;
  border-radius: 7px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.bgColor || "black"};
    color: ${(props) => props.color || "white"};
    border: 1px solid black;
  }
`;
