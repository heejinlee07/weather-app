import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AIR_SELECTED_DATA } from "../../modules/AirReducer";
import {
  Wrapper,
  AirTotalInfo,
  Card,
  AirAreaBlock,
  AirAreaText,
  AirPollutionWrapper,
  AirDetail,
  AirPollution,
  AirPollutionDust,
  AirTotalText,
} from "./AirPollutionItem.styles";
import clearSky from "../../assets/clearSky.jpg";
import sunnySky from "../../assets/sunnySky.jpg";
import main2 from "../../assets/main2.jpg";

function getWeatherImage(type) {
  switch (type) {
    case "좋음":
      return sunnySky;
    case "보통":
      return clearSky;
    default:
      return main2;
  }
}

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
        <Card onClick={onClickHandler || onClick}>
          <AirAreaBlock url={getWeatherImage(IDEX_NM)}>
            <AirAreaText>
              <div>{MSRSTE_NM}</div>
              <div>
                {IDEX_NM !== "점검중" ? `통합대기환경등급: ${IDEX_NM}` : "-"}
              </div>
            </AirAreaText>
          </AirAreaBlock>
          <AirPollutionWrapper>
            <AirAreaText>
              <div>{MSRSTE_NM}</div>
              <div>
                {IDEX_NM !== "점검중" ? `통합대기환경등급: ${IDEX_NM}` : "-"}
              </div>
            </AirAreaText>
            <AirDetail>
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
            </AirDetail>
          </AirPollutionWrapper>
        </Card>
      </AirTotalInfo>
    </Wrapper>
  );
}
