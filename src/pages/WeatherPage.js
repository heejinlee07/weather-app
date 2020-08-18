import React, { useEffect } from "react";
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
import SelectedWeatherItem from "../components/airItemsSelected/SelectedAirItem";
import {
  WrapperBlock,
  Wrapper,
  WeatherWrapper,
  CurrentHourlyInfo,
} from "../components/CurrentWeatherInfos/CurrentWeatherInfo.styles";

import { WeekWrapper } from "../components/WeekWeatherInfos/WeekWeatherInfo.styles";
import { IconImg } from "../styles/CommonStyle";
import TodayDate from "../components/TodayDates/TodayDate";
import CurrentWeatherInfoDetails from "../components/currentWeatherInfoDetails/CurrentWeatherInfoDetails";
import AreaSelect from "../components/AreaSelect/AreaSelect";

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
      <AreaSelect />
      <Wrapper>
        {status === "loading" && <h1>Now Loading...</h1>}
        {status === "error" && <h1>Error Occured...</h1>}
        <WrapperBlock>
          <TodayDate />
          <SelectedWeatherItem />
        </WrapperBlock>
        <WeatherWrapper>
          <CurrentWeatherInfo weathers={weathers} />
          <CurrentHourlyInfo>
            {weathers.hourly?.map((_hourly) => (
              <HourlyWeatherInfo hourly={_hourly} />
            ))}
          </CurrentHourlyInfo>
          <CurrentWeatherInfoDetails weathers={weathers} />
        </WeatherWrapper>
      </Wrapper>
      <WeekWrapper>
        {weathers.daily?.slice(1).map((week) => (
          <WeekWeatherInfo week={week} />
        ))}
      </WeekWrapper>
    </>
  );
};

export default WeatherPage;
