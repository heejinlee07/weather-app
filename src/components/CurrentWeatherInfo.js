import React, { useState, useEffect } from "react";
import { api } from "../utils/weatherApi";
import { API_KEY } from "../utils/weatherKey";

import TodayDate from "./TodayDate";
import HourlyWeatherInfo from "./HourlyWeatherInfo";
import WeekWeatherInfo from "./WeekWeatherInfo";
import { dayNames } from "../constants/DateTime";
import { getFixedNumberWithDefaultWithoutOrder } from "../utils/calculate";

import {
  Wrapper,
  WeatherWrapper,
  CurrentAreaInfo,
  CurrentDayInfo,
  CurrentDayName,
  CurrentHourlyInfo,
  CurrentDayTemp,
  CurrentDescription,
  CurrentTotalInfo,
  CurrentTotalSunrise,
  CurrentTotalSunset,
  CurrentTotalText,
} from "./CurrentWeatherInfo.styles";

import { IconImg } from "../styles/CommonStyle";

const CurrentWeatherInfo = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(37.5326);
  const [lon, setLon] = useState(127.024612);

  useEffect(() => {
    async function getMovieList() {
      setLoading(true);

      try {
        const { data } = await api.get(
          `/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=kr&exclude=minutely&appid=${API_KEY}`
        );
        console.log(data);
        setWeather(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }
    getMovieList();
  }, [lat, lon]);

  // 오늘 시간 계산
  const today = new Date(weather.current?.dt * 1000);
  const todayName = dayNames[today.getDay()];

  let hour = today.getHours();
  hour %= 12;
  hour = hour || 12;

  const todayKeyword = hour <= 12 ? "오늘" : "야간";
  console.log(todayKeyword);
  console.log(hour);

  // 일출,일몰 시간 계산
  const sunriseTime = new Date(weather.current?.sunrise * 1000);
  let sunriseHour = sunriseTime.getHours();
  sunriseHour %= 12;
  sunriseHour = sunriseHour || 12;

  const sunriseMinutes = sunriseTime.getMinutes();

  const sunsetTime = new Date(weather.current?.sunset * 1000);
  let sunsetHour = sunsetTime.getHours();
  sunsetHour %= 12;
  sunsetHour = sunsetHour || 12;
  const sunsetMinutes = sunsetTime.getMinutes();

  const CurrentIconId = weather.current?.weather.map((icon) => icon.icon);

  return (
    <Wrapper>
      <TodayDate />
      <WeatherWrapper>
        {isLoading && <h1>Now Loading...</h1>}
        {hasError && <h1>Error Occured...</h1>}
        <CurrentAreaInfo>
          <div>{weather.timezone}</div>
          <div>
            {weather.current?.weather.map((main) => (
              <div>{main.description}</div>
            ))}
          </div>
          <div>{weather.current?.temp.toFixed()} ℃</div>
          <IconImg
            src={`http://openweathermap.org/img/wn/${CurrentIconId}@2x.png`}
            height={70}
            width={80}
          />
        </CurrentAreaInfo>
        <CurrentDayInfo>
          <CurrentDayName>
            <div>{todayName}</div>
            <div>{todayKeyword}</div>
          </CurrentDayName>
          <CurrentDayTemp>
            <div>{weather.daily?.[0].temp.max.toFixed()}</div>
            <div>{weather.daily?.[0].temp.min.toFixed()}</div>
          </CurrentDayTemp>
        </CurrentDayInfo>
        <CurrentHourlyInfo>
          {weather.hourly?.map((_hourly) => (
            <HourlyWeatherInfo hourly={_hourly} />
          ))}
        </CurrentHourlyInfo>
        {!isLoading &&
          weather.daily
            ?.slice(1)
            .map((week) => <WeekWeatherInfo week={week} />)}
        <CurrentDescription>
          {todayKeyword}: 현재 날씨{" "}
          {weather.current?.weather.map((main) => (
            <span>{main.description}, </span>
          ))}
          최고 기온은 {weather.daily?.[0].temp.max.toFixed()}°이며, 예상 최저
          기온은 {weather.daily?.[0].temp.min.toFixed()}
          °입니다.
        </CurrentDescription>
        <CurrentTotalInfo>
          <CurrentTotalSunrise>
            <CurrentTotalText>일출</CurrentTotalText>
            <div>
              오전 {sunriseHour}:{sunriseMinutes}
            </div>
            <CurrentTotalText>비 올 확률</CurrentTotalText>
            <div>{weather.current?.clouds}%</div>
            <CurrentTotalText>바람</CurrentTotalText>
            <div>남남동 {weather.current?.wind_speed.toFixed()}m/s</div>
            {/* TODO: wind_deg 풍향으로 방향 어떻게 나타내는지? */}
            <CurrentTotalText>강수량</CurrentTotalText>
            <div>
              {getFixedNumberWithDefaultWithoutOrder({
                value: weather.daily?.[0].rain,
              })}
            </div>
            <CurrentTotalText>가시거리</CurrentTotalText>
            <div>{weather.current?.visibility / 1000}km</div>
          </CurrentTotalSunrise>
          <CurrentTotalSunset>
            <CurrentTotalText>일몰</CurrentTotalText>
            <div>
              오후 {sunsetHour}:{sunsetMinutes}
            </div>
            <CurrentTotalText>습도</CurrentTotalText>
            <div>{weather.current?.humidity}%</div>
            <CurrentTotalText>체감</CurrentTotalText>
            <div>{weather.current?.feels_like.toFixed()}°</div>
            <CurrentTotalText>기압</CurrentTotalText>
            <div>{weather.current?.pressure}hPa</div>
            <CurrentTotalText>자외선 지수</CurrentTotalText>
            <div>{weather.current?.uvi.toFixed()}</div>
          </CurrentTotalSunset>
        </CurrentTotalInfo>
      </WeatherWrapper>
    </Wrapper>
  );
};

export default CurrentWeatherInfo;
