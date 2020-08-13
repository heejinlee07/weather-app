export const WEATHER_SET_LOADING = "WEATHER_SET_LOADING";
export const WEATHER_HAS_ERROR = "WEATHER_HAS_ERROR";
export const WEATHER_SET_DATA = "WEATHER_SET_DATA";
export const HISTORY_WEATHER_SET_DATA = "HISTORY_WEATHER_SET_DATA";

const initialState = {
  weathers: [],
  historyWeather: [],
  status: "idle",
};

export default function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER_SET_LOADING:
      return { ...state, status: "loading" };
    case WEATHER_HAS_ERROR:
      return { ...state, status: "error" };
    case WEATHER_SET_DATA:
      return {
        ...state,
        weathers: action.payload,
        status: "completed",
      };
    case HISTORY_WEATHER_SET_DATA:
      return {
        ...state,
        historyWeathers: action.payload,
        status: "completed",
      };
    default:
      return state;
  }
}
