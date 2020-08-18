import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { locations } from "../../constants/Geolocation";
import { GEO_SET_DATA } from "../../modules/GeoReducer";
import { CustomSelect } from "../../styles/CommonStyle";

const SelectBox = styled.div`
  position: absolute;
  right: 150px;
`;

const AreaSelect = () => {
  const selectedLocation = useSelector(({ geos }) => geos.selectedLocation);
  const dispatch = useDispatch();

  const options = locations.map((area) => ({
    label: area.name,
    value: area.id,
  }));

  const onChange = (e) => {
    dispatch({ type: GEO_SET_DATA, payload: e.value });
    console.log("e", e, "e.value", e.value);
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
