import React from "react";
import styled from "styled-components";
import { AIR_SELECTED_DATA } from "../modules/AirReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div``;

const AirTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px;
  padding: 10px;
  border: 1px solid green;
  border-radius: 10px;
  cursor: pointer;
`;

const AirAreaText = styled.div`
  display: flex;
  flex-direction: row;
`;

const AirPollutionWrapper = styled.div`
  display: flex;
`;

const AirPollution = styled.div`
  margin-right: 15px;
`;

const AirPollutionDust = styled.div``;

const AirTotalText = styled.div`
  font-size: 14px;
  color: gray;
  margin-top: 10px;
`;

export default function AirPollutionItem({ air, onClickHandler }) {
  const { IDEX_NM, MSRSTE_NM, PM10, PM25, O3, NO2, CO, SO2 } = air;

  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = () => {
    dispatch({ type: AIR_SELECTED_DATA, payload: air });
    history.push("/");
  };

  return (
    <Wrapper>
      <AirTotalInfo>
        <AirAreaText>{MSRSTE_NM}</AirAreaText>
        {IDEX_NM !== "점검중" ? `통합대기환경등급: ${IDEX_NM}` : "-"}
        <AirPollutionWrapper onClick={onClickHandler || onClick}>
          <AirPollution>
            <AirTotalText>미세먼지(㎍/㎥)</AirTotalText>
            <div>{PM10}</div>
            <AirTotalText>초미세먼지농도(㎍/㎥)</AirTotalText>
            <div>{PM25}</div>
            <AirTotalText>오존(ppm)</AirTotalText>
            <div>{O3}</div>
          </AirPollution>
          <AirPollutionDust>
            <AirTotalText>이산화질소농도(ppm)</AirTotalText>
            <div>{NO2}</div>
            <AirTotalText>일산화탄소농도(ppm)</AirTotalText>
            <div>{CO}</div>
            <AirTotalText>아황산가스농도(ppm)</AirTotalText>
            <div>{SO2}</div>
          </AirPollutionDust>
        </AirPollutionWrapper>
      </AirTotalInfo>
    </Wrapper>
  );
}
