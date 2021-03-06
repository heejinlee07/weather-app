import styled from "styled-components";

export const ButtonUi = styled.div`
  width: ${(props) => props.btnWidth}px;
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.color || "black"};
  text-decoration: none;
  text-align: center;
  padding: ${(props) => props.BtnPadding || 5}px;
  margin: ${(props) => props.BtnMargin || 3}px;
  border-radius: ${(props) => props.BtnBorderRad || 7}px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.bgColor || "black"};
    color: ${(props) => props.color || "white"};
    border: 1px solid black;
  }
`;
