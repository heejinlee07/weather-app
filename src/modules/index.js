import { combineReducers } from "redux";
import airReducer from "./AirReducer";
import weatherReducer from "./WeatherReducer";
import GeoReducer from "./GeoReducer";

const rootReducer = combineReducers({
  airs: airReducer,
  weathers: weatherReducer,
  geos: GeoReducer,
});

export default rootReducer;
