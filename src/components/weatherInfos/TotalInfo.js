import React, { useState, useEffect } from "react";
import { locations } from "../../constants/Geolocation";
import styled from "styled-components";

import { GEO_SET_DATA } from "../../modules/GeoReducer";

import { useSelector, useDispatch } from "react-redux";

import TodayDate from "./TodayDate";

import CurrentWeatherInfo from "./CurrentWeatherInfo";

import { Wrapper } from "./CurrentWeatherInfo.styles";

const Select = styled.select`
  position: absolute;
  right: 60px;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  &: hover {
    color: white;
    background: black;
  }
`;

const TotalInfo = () => {
  const selectedLocation = useSelector(({ geos }) => geos.selectedLocation);
  const dispatch = useDispatch();

  //TODO: https://ko.reactjs.org/docs/forms.html
  return (
    <>
      <Select
        value={selectedLocation.id}
        onChange={({ target }) => {
          dispatch({ type: GEO_SET_DATA, payload: target.value });
        }}
      >
        {locations.map((area) => (
          <option value={area.id}>{area.name}</option>
        ))}
      </Select>
      <Wrapper>
        <TodayDate />
        <CurrentWeatherInfo />
      </Wrapper>
    </>
  );
};

export default TotalInfo;
