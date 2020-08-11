import { combineReducers } from "redux";
import airReducer from "./AirReducer";
import weatherReducer from "./WeatherReducer";

const rootReducer = combineReducers({
  airs: airReducer,
  weathers: weatherReducer,
});

export default rootReducer;
