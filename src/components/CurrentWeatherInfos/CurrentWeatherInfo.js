import React from "react";
import { dayNames } from "../../constants/DateTime";
import {
  CurrentAreaInfo,
  CurrentDayInfo,
  CurrentDayName,
  CurrentDayTemp,
  Timezone,
} from "./CurrentWeatherInfo.styles";

import { IconImg } from "../../styles/CommonStyle";

const CurrentWeatherInfo = ({ weathers }) => {
  // 오늘 시간 계산
  const today = new Date(weathers.current?.dt * 1000);
  const todayName = dayNames[today.getDay()];

  let hour = today.getHours();
  hour %= 12;
  hour = hour || 12;

  const todayKeyword = hour <= 12 ? "오늘" : "야간";
  // console.log(todayKeyword);
  // console.log(hour);

  const CurrentIconId = weathers.current?.weather.map((icon) => icon.icon);

  return (
    <>
      <CurrentAreaInfo>
        <Timezone>{weathers?.timezone}</Timezone>
        <div>
          {weathers.current?.weather.map((main) => (
            <div key={main.id}>{main.description}</div>
          ))}
        </div>
        <div>{weathers.current?.temp.toFixed()} ℃</div>
        <IconImg
          src={`http://openweathermap.org/img/wn/${CurrentIconId}@2x.png`}
          height={150}
          width={100}
        />
      </CurrentAreaInfo>
      <CurrentDayInfo>
        <CurrentDayName>
          <div>{todayName}</div>
          <div>{todayKeyword}</div>
        </CurrentDayName>
        <CurrentDayTemp>
          <div>{weathers.daily?.[0].temp.max.toFixed()}</div>
          <div>{weathers.daily?.[0].temp.min.toFixed()}</div>
        </CurrentDayTemp>
      </CurrentDayInfo>
    </>
  );
};

export default CurrentWeatherInfo;
