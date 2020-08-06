import React from "react";
import styled from "styled-components";

import { dayNames } from "../constants/DateTime";

import { IconImg } from "../styles/CommonStyle";

const Wrapper = styled.div`
  padding-top: 10px;
`;

const DailyList = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
`;

const DailyTemp = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    margin-right: 10px;
  }
`;

export default function WeekWeatherInfo({ week }) {
  const time = new Date(week.dt * 1000);
  console.log("week", week);
  const name = dayNames[time.getDay()];

  const DailyIconId = week?.weather.map((icon) => icon.icon);

  return (
    <Wrapper>
      <DailyList>
        <div>{name}</div>
        <div>
          <IconImg
            src={`http://openweathermap.org/img/wn/${DailyIconId}@2x.png`}
            height={30}
            width={30}
          />
        </div>
        <DailyTemp>
          <div>{week.temp.max.toFixed()}</div>
          <div>{week.temp.min.toFixed()}</div>
        </DailyTemp>
      </DailyList>
    </Wrapper>
  );
}
