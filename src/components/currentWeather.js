import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import { API_KEY } from "../utils/key";

import styled from "styled-components";

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

const dayNames = [
  "(일요일)",
  "(월요일)",
  "(화요일)",
  "(수요일)",
  "(목요일)",
  "(금요일)",
  "(토요일)",
];

const CurrentWeather = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [weather, setWeather] = useState({});
  const [lat, setLat] = useState(37.5326);
  const [lon, setLon] = useState(127.024612);

  useEffect(() => {
    async function getMovieList() {
      setLoading(true);

      try {
        const { data } = await api.get(
          `/onecall?lat=${lat}&lon=${lon}&units=metric&lang=kr&exclude=hourly&appid=${API_KEY}`
        );
        console.log(data);
        console.log(data.current.weather);
        console.log(data.daily);
        setWeather(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    }
    getMovieList();
  }, [lat, lon]);

  const today = new Date(weather.current?.dt * 1000);
  const todayName = dayNames[today.getDay()];

  return (
    <div>
      {isLoading && <h1>Now Loading...</h1>}
      {hasError && <h1>Error Occured...</h1>}
      <CurrentAreaInfo>
        <div>{weather.timezone}</div>
        <div>비</div>
        <div>{weather.current?.temp} ℃</div>
      </CurrentAreaInfo>
      <CurrentDayInfo>
        <div>
          <div>{todayName}</div>
          <div>오늘</div>
        </div>
        <div>
          <div>30</div>
          <div>24</div>
        </div>
      </CurrentDayInfo>
      <div>
        {weather.current?.weather.map((wea) => (
          <span>{wea.id}</span>
        ))}
      </div>
      <div>
        {weather.daily?.map((_weather) => (
          <div>Daily Temperature: {_weather.temp.day}</div>
        ))}
        <div>{weather.daily?.[0].temp.max}</div>
        {weather.daily?.map((day) => {
          const time = new Date(day.dt * 1000);
          const name = dayNames[time.getDay()];
          return (
            <div>
              {name}: {day.temp.max}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWeather;
