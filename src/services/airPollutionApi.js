import axios from "axios";
import { API_KEY } from "./airPollutionKey";

export const api = axios.create({
  baseURL: `http://openAPI.seoul.go.kr:8088/${API_KEY}/json/RealtimeCityAir/1/99/`,
});
