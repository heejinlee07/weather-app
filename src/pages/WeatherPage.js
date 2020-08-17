import React, { useState, useEffect } from "react";
import { api } from "../services/weatherApi";
import { API_KEY } from "../services/weatherKey";

import {
  WEATHER_SET_LOADING,
  WEATHER_SET_DATA,
  WEATHER_HAS_ERROR,
} from "../modules/WeatherReducer";
import { useSelector, useDispatch } from "react-redux";

import CurrentWeatherInfo from "../components/CurrentWeatherInfos/CurrentWeatherInfo";

import WeekWeatherInfo from "../components/WeekWeatherInfos/WeekWeatherInfo";
import HourlyWeatherInfo from "../components/HourlyWeatherInfos/HourlyWeatherInfo";

import {
  WeatherWrapper,
  CurrentHourlyInfo,
} from "../components/CurrentWeatherInfos/CurrentWeatherInfo.styles";

import { IconImg } from "../styles/CommonStyle";
import TodayDate from "../components/TodayDates/TodayDate";
import CurrentWeatherInfoDetails from "../components/currentWeatherInfoDetails/CurrentWeatherInfoDetails";

// import Test from "./Test";

const WeatherPage = () => {
  const selectedLocation = useSelector(({ geos }) => geos.selectedLocation);

  const status = useSelector(({ weathers }) => weathers.status);
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

  return (
    <>
      {status === "loading" && <h1>Now Loading...</h1>}
      {status === "error" && <h1>Error Occured...</h1>}
      <TodayDate />
      <WeatherWrapper>
        <CurrentWeatherInfo weathers={weathers} />
        <CurrentHourlyInfo>
          {/* TODO: hourly */}
          {weathers.hourly?.map((_hourly) => (
            <HourlyWeatherInfo hourly={_hourly} />
          ))}
          {/* TODO: week */}
        </CurrentHourlyInfo>
        {weathers.daily?.slice(1).map((week) => (
          <WeekWeatherInfo week={week} />
        ))}
        {/* TODO: currentDetail */}
        <CurrentWeatherInfoDetails weathers={weathers} />
      </WeatherWrapper>
    </>
  );
};

export default WeatherPage;
