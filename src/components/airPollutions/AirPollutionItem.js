import React from "react";
import styled, { keyframes } from "styled-components";
import { AIR_SELECTED_DATA } from "../../modules/AirReducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import clearSky from "../../assets/clearSky.jpg";
import sunnySky from "../../assets/sunnySky.jpg";
import main2 from "../../assets/main2.jpg";

const Wrapper = styled.div``;

const AirTotalInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 220px;
  margin: 20px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;

const Card = styled.div`
  position: relative;
  perspective: 150rem;
`;

const AirAreaBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  padding: 40px;
  width: 380px;
  height: 200px;
  border-radius: 10px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  transform: rotateY(0deg);
  backface-visibility: hidden;

  &:hover {
    transform: rotateY(-180deg);
    transition: 1s;
  }
`;

const AirAreaText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

const AirPollutionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 220px;
`;

const AirDetail = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;

const AirPollution = styled.div`
  margin-right: 15px;
  height: 200px;

  & > * {
    font-size: 20px;
  }
`;

const AirPollutionDust = styled.div`
  font-size: 20px;
`;

const AirTotalText = styled.div`
  font-size: 14px;
  color: gray;
  margin-top: 10px;
`;

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
