import React from "react";

import { dayNames } from "../../constants/DateTime";
import { getFixedNumberWithDefaultWithoutOrder } from "../../utils/calculate";
import {
  CurrentDescription,
  CurrentTotalInfo,
  CurrentTotalSunrise,
  CurrentTotalSunset,
  CurrentTotalText,
} from "../CurrentWeatherInfos/CurrentWeatherInfo.styles";

export default function CurrentWeatherInfoDetails({ weathers }) {
  // 오늘 시간 계산
  const today = new Date(weathers.current?.dt * 1000);
  const todayName = dayNames[today.getDay()];

  let hour = today.getHours();
  hour %= 12;
  hour = hour || 12;

  const todayKeyword = hour <= 12 ? "오늘" : "야간";
  console.log(todayKeyword);
  console.log(hour);

  // 일출,일몰 시간 계산
  const sunriseTime = new Date(weathers.current?.sunrise * 1000);
  let sunriseHour = sunriseTime.getHours();
  sunriseHour %= 12;
  sunriseHour = sunriseHour || 12;

  const sunriseMinutes = sunriseTime.getMinutes();

  const sunsetTime = new Date(weathers.current?.sunset * 1000);
  let sunsetHour = sunsetTime.getHours();
  sunsetHour %= 12;
  sunsetHour = sunsetHour || 12;
  const sunsetMinutes = sunsetTime.getMinutes();

  return (
    <>
      <CurrentDescription>
        {todayKeyword}: 현재 날씨{" "}
        {weathers.current?.weather.map((main) => (
          <span>{main.description}, </span>
        ))}
        최고 기온은 {weathers.daily?.[0].temp.max.toFixed()}°이며, 예상 최저
        기온은 {weathers.daily?.[0].temp.min.toFixed()}
        °입니다.
      </CurrentDescription>
      <CurrentTotalInfo>
        <CurrentTotalSunrise>
          <CurrentTotalText>일출</CurrentTotalText>
          <div>
            오전 {sunriseHour}:{sunriseMinutes}
          </div>
          <CurrentTotalText>비 올 확률</CurrentTotalText>
          <div>{weathers.current?.clouds}%</div>
          <CurrentTotalText>바람</CurrentTotalText>
          <div>남남동 {weathers.current?.wind_speed.toFixed()}m/s</div>
          {/* TODO: wind_deg 풍향으로 방향 어떻게 나타내는지? */}
          <CurrentTotalText>강수량</CurrentTotalText>
          <div>
            {getFixedNumberWithDefaultWithoutOrder({
              value: weathers.daily?.[0].rain,
            })}
          </div>
          <CurrentTotalText>가시거리</CurrentTotalText>
          <div>{weathers.current?.visibility / 1000}km</div>
        </CurrentTotalSunrise>
        <CurrentTotalSunset>
          <CurrentTotalText>일몰</CurrentTotalText>
          <div>
            오후 {sunsetHour}:{sunsetMinutes}
          </div>
          <CurrentTotalText>습도</CurrentTotalText>
          <div>{weathers.current?.humidity}%</div>
          <CurrentTotalText>체감</CurrentTotalText>
          <div>{weathers.current?.feels_like.toFixed()}°</div>
          <CurrentTotalText>기압</CurrentTotalText>
          <div>{weathers.current?.pressure}hPa</div>
          <CurrentTotalText>자외선 지수</CurrentTotalText>
          <div>{weathers.current?.uvi.toFixed()}</div>
        </CurrentTotalSunset>
      </CurrentTotalInfo>
    </>
  );
}
