import React from "react";
import styled from "styled-components";

import { getFixedNumberWithDefaultWithoutOrder } from "../../utils/calculate";
import { dayNames } from "../../constants/DateTime";
import { IconImg } from "../../styles/CommonStyle";

const Wrapper = styled.div``;

const CurrentHourlyTime = styled.div`
  display: flex;
  flex-direction: row;
  width: 70px;
  margin: 5px 0;
  justify-content: center;
  align-items: center;
`;

const CurrentHourlyHumidity = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
  font-size: 13px;
  justify-content: center;
  align-items: center;
`;

const CurrentHourlyIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CurrentHourlyTemp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

function HourlyWeatherInfo({ hourly }) {
  console.log("hourly", hourly);
  const hourlyTime = new Date(hourly.dt * 1000);

  let hour = hourlyTime.getHours();
  const ampm = hour >= 12 ? "오후 " : "오전 ";

  hour %= 12;
  hour = hour || 12;

  const HourlyIconId = hourly?.weather.map((icon) => icon.icon);

  return (
    <Wrapper>
      <CurrentHourlyTime>
        <div>
          {ampm}
          {hour}시
        </div>
      </CurrentHourlyTime>
      <CurrentHourlyHumidity>
        <div>
          {getFixedNumberWithDefaultWithoutOrder({
            value: hourly.pop,
            fallback: "-",
            calculate: (_val) => (_val * 100).toFixed(),
            units: "%",
          })}
        </div>
      </CurrentHourlyHumidity>
      <CurrentHourlyIcon>
        <IconImg
          src={`http://openweathermap.org/img/wn/${HourlyIconId}@2x.png`}
          height={50}
          width={60}
        />
      </CurrentHourlyIcon>
      <CurrentHourlyTemp>
        <div>{hourly.temp.toFixed()}°</div>
      </CurrentHourlyTemp>
    </Wrapper>
  );
}

export default HourlyWeatherInfo;
