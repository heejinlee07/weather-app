import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const AirTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid green;
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

export default function AirPollutionList({ air }) {
  const { MSRDT, IDEX_NM, MSRSTE_NM, PM10, PM25 } = air;

  return (
    <Wrapper>
      <AirTotalInfo>
        {IDEX_NM !== "점검중" ? IDEX_NM : ""}
        <AirAreaText>{MSRSTE_NM}</AirAreaText>
        <AirPollutionWrapper>
          <AirPollution>
            <AirTotalText>미세먼지(㎍/㎥)</AirTotalText>
            <div>{PM10}</div>
            <AirTotalText>미세먼지(㎍/㎥)</AirTotalText>
            <div>{PM10}</div>
          </AirPollution>
          <AirPollutionDust>
            <AirTotalText>초미세먼지농도(㎍/㎥)</AirTotalText>
            <div>{PM25}</div>
          </AirPollutionDust>
        </AirPollutionWrapper>
      </AirTotalInfo>
    </Wrapper>
  );
}
