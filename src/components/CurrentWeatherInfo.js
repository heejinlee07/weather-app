import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import { API_KEY } from "../utils/key";

import styled from "styled-components";

import HourlyWeatherInfo from "./HourlyWeatherInfo";
import WeekWeatherInfo from "./WeekWeatherInfo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

const CurrentAreaInfo = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;

const CurrentDayInfo = styled.div`
  background: skyblue;
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const CurrentDayName = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
`;

const CurrentDayTemp = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
`;

const CurrentTotalInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
`;

const CurrentTotalSunrise = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const CurrentTotalSunset = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const CurrentTotalText = styled.div`
  font-size: 14px;
  color: gray;
  margin-top: 10px;
`;

export const dayNames = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

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
        console.log(data.current.weather);
        console.log("hourlydata", data.hourly);
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
  const hour = today.getHours();

  const todayKeyword = hour <= 24 ? "오늘" : "야간";

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

  return (
    <Wrapper>
      {isLoading && <h1>Now Loading...</h1>}
      {hasError && <h1>Error Occured...</h1>}
      <CurrentAreaInfo>
        <div>{weather.timezone}</div>
        <div>
          {weather.current?.weather.map((main) => (
            <div>{main.main}</div>
          ))}
        </div>
        <div>{weather.current?.temp.toFixed()} ℃</div>
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
      {weather.hourly?.map((_hourly) => (
        <HourlyWeatherInfo hourly={_hourly} />
      ))}
      {!isLoading &&
        weather.daily?.map((week) => <WeekWeatherInfo week={week} />)}
      <hr />
      {todayKeyword}: 현재 날씨{" "}
      {weather.current?.weather.map((main) => (
        <span>{main.main}, </span>
      ))}
      최고 기온은 {weather.daily?.[0].temp.max.toFixed()}°입니다. {todayKeyword}{" "}
      밤 날씨 뇌우(수정요), 최저 기온은 {weather.daily?.[0].temp.min.toFixed()}
      °입니다.
      <hr />
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
          <div>{((weather.daily?.[0].rain * 1) / 10).toFixed(1)}cm</div>
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
          <div>{weather.current?.uvi}</div>
        </CurrentTotalSunset>
      </CurrentTotalInfo>
    </Wrapper>
  );
};

export default CurrentWeatherInfo;
