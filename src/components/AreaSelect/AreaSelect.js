import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { CustomSelect } from "../../styles/CommonStyle";

import Inputs from "../common/input/Inputs";
import { locations } from "../../constants/Geolocation";
import { GEO_SET_DATA, GEO_SEARCH_DATA } from "../../modules/GeoReducer";

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1100px;
`;

const AreaSelect = () => {
  const [input, setInputs] = useState("");
  const selectedLocation = useSelector(({ geos }) => geos.selectedLocation);
  console.log("hihih", selectedLocation);
  const dispatch = useDispatch();

  const options = locations.map((area) => ({
    label: area.name,
    value: area.id,
  }));

  const onChange = (e) => {
    dispatch({ type: GEO_SET_DATA, payload: e.value });
    console.log("e", e, "e.value", e.value);
  };

  const SearchArea = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: GEO_SEARCH_DATA, payload: e.target.value });
    }
    setInputs("");
  };

  // const customStyles = {
  //   menu: (provided, state) => ({
  //     ...provided,
  //     width: state.selectProps.width,
  //     color: state.selectProps.menuColor,
  //     padding: 20,
  //   }),
  //   control: (_, { selectProps: { width, menuColor } }) => ({
  //     width: width,
  //     menuColor: menuColor,
  //   }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = "opacity 200ms";

  //     return { ...provided, opacity, transition };
  //   },
  //   option: (provided, state) => ({
  //     ...provided,
  //     color: state.isSelected ? "white" : "black",
  //   }),
  // };

  // [
  //   { label: locations.id, value: locations.value },
  //   // { label: "One", value: 1 },
  //   // { label: "Two", value: 2 },
  // ];

  // const onChange = ({ target }) => {
  //   dispatch({ type: GEO_SET_DATA, payload: target.value });
  // };
  //TODO: https://ko.reactjs.org/docs/forms.html
  return (
    <>
      {/* <Selects
        value={selectedLocation.id}
        onChange={({ target }) => {
          dispatch({ type: GEO_SET_DATA, payload: target.value });
        }}
      >
        {locations.map((area) => (
          <option value={area.id}>{area.name}</option>
        ))}
      </Selects> */}
      <SelectBox>
        <Inputs
          placeholder="도시를 입력하세요"
          InputWidth={200}
          InputPadding={8}
          InputBorderRad={10}
          onKeyPress={SearchArea}
        />
        <CustomSelect
          options={options}
          onChange={onChange}
          placeholder="도시를 선택하세요"
          classNamePrefix={"Select"}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
            colors: {
              ...theme.colors,
              primary25: "#dbdbdb",
              primary: "black",
            },
          })}
        />
      </SelectBox>
    </>
  );
};

export default AreaSelect;
