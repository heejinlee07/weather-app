import React from "react";
import styled from "styled-components";

const CurrentHourlyInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: beige;
  width: 500px;
  height: 100px;
  overflow-x: scroll;
`;

const CurrentHourlyTime = styled.div`
  display: flex;
`;

const CurrentHourlyHumidity = styled.div`
  display: flex;

  & > div {
    margin-right: 10px;
  }
`;

const CurrentHourlyIcon = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const IconImg = styled.img`
  background-image: url("http://openweathermap.org/img/wn/10d@2x.png");
  background-repeat: no-repeat;
  height: 100px;
  width: 100px;
`;

const CurrentHourlyTemp = styled.div`
  display: flex;

  & > div {
    margin-right: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function HourlyWeatherInfo({ hourly }) {
  return (
    <CurrentHourlyInfo>
      <Wrapper>
        <CurrentHourlyTime>시간표시</CurrentHourlyTime>
        <CurrentHourlyHumidity>
          <div>{hourly.humidity}%</div>
        </CurrentHourlyHumidity>
        <CurrentHourlyIcon>
          {/* {weather.hourly?.map((_hourly) =>
            _hourly.weather.map((icon) => <Icon icon={icon} />)
          )} */}
          <IconImg></IconImg>
        </CurrentHourlyIcon>
        <CurrentHourlyTemp>
          <div>{hourly.temp.toFixed()}°</div>
        </CurrentHourlyTemp>
      </Wrapper>
    </CurrentHourlyInfo>
  );
}

export default HourlyWeatherInfo;
