import styled from "styled-components";

export const ButtonUi = styled.div`
  width: ${(props) => props.btnWidth}px;
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.color || "black"};
  text-decoration: none;
  text-align: center;
  padding: 5px;
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
