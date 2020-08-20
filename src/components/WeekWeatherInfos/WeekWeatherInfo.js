import React from "react";
import {
  WeekWeatherBlock,
  WeekWeatherInner,
  WeekWeatherTemp,
} from "./WeekWeatherInfo.styles";

import { dayNames } from "../../constants/DateTime";
import { IconImg } from "../../styles/CommonStyle";

export default function WeekWeatherInfo({ week }) {
  const time = new Date(week.dt * 1000);
  const name = dayNames[time.getDay()];

  const DailyIconId = week?.weather.map((icon) => icon.icon);

  return (
    <WeekWeatherBlock>
      <WeekWeatherInner>
        <div>{name}</div>
        <IconImg
          src={`http://openweathermap.org/img/wn/${DailyIconId}@2x.png`}
          height={30}
          width={30}
        />
        <WeekWeatherTemp>
          <div>{week.temp.max.toFixed()}°</div>
          <div>{week.temp.min.toFixed()}°</div>
        </WeekWeatherTemp>
      </WeekWeatherInner>
    </WeekWeatherBlock>
  );
}
