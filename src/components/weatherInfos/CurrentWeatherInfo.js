import React, { useState, useEffect } from "react";
import { api } from "../../services/weatherApi";
import { API_KEY } from "../../services/weatherKey";

import {
  WEATHER_SET_LOADING,
  WEATHER_SET_DATA,
  WEATHER_HAS_ERROR,
} from "../../modules/WeatherReducer";
import { useSelector, useDispatch } from "react-redux";
import WeekWeatherInfo from "./WeekWeatherInfo";
import HourlyWeatherInfo from "./HourlyWeatherInfo";
import { dayNames } from "../../constants/DateTime";
import { getFixedNumberWithDefaultWithoutOrder } from "../../utils/calculate";
import {
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
  Timezone,
} from "./CurrentWeatherInfo.styles";

import { IconImg } from "../../styles/CommonStyle";

const CurrentWeatherInfo = () => {
  // TODO: useState의 초기값이 어떤 역할을 하는지
  const selectedLocation = useSelector(({ geos }) => geos.selectedLocation);

  // const status = useSelector((state) => state.weathers.status);
  const status = useSelector(({ weathers }) => weathers.status);
  // const weathers = useSelector((state) => state.weathers.weathers);
  const weathers = useSelector(({ weathers }) => weathers.weathers);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getWeatherList() {
      dispatch({ type: WEATHER_SET_LOADING });

      try {
        const { data } = await api.get(
          `/data/2.5/onecall?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&units=metric&lang=kr&exclude=minutely&appid=${API_KEY}`
        );
        console.log("data", data);
        dispatch({ type: WEATHER_SET_DATA, payload: data });
      } catch (e) {
        dispatch({ type: WEATHER_HAS_ERROR });
      }
    }
    getWeatherList();
    // TODO: React dependency array
  }, [dispatch, selectedLocation]);

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

  const CurrentIconId = weathers.current?.weather.map((icon) => icon.icon);

  return (
    <>
      <WeatherWrapper>
        {status === "loading" && <h1>Now Loading...</h1>}
        {status === "error" && <h1>Error Occured...</h1>}
        <CurrentAreaInfo>
          <Timezone>{weathers.timezone}</Timezone>
          <div>
            {weathers.current?.weather.map((main) => (
              <div>{main.description}</div>
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
        <CurrentHourlyInfo>
          {weathers.hourly?.map((_hourly) => (
            <HourlyWeatherInfo hourly={_hourly} />
          ))}
        </CurrentHourlyInfo>
        {weathers.daily?.slice(1).map((week) => (
          <WeekWeatherInfo week={week} />
        ))}
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
      </WeatherWrapper>
    </>
  );
};

export default CurrentWeatherInfo;
