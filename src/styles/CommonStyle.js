import styled from "styled-components";
import Select from "react-select";
import ReactSelect from "react-select";

//image
export const IconImg = styled.img`
  border: 0;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

//select
export const CustomSelect = styled(ReactSelect)`
  & .Select__control--is-focused {
    border: 3px solid black;
  }
  & .Select__control {
    width: 200px;
    border: 1px solid black;
    cursor: pointer;
  }

  & .Select__menu {
    width: 200px;
    padding: 10px 0;
    margin: 1px;
  }

  & .Select__dropdown-indicator {
    color: black;
  }
`;
