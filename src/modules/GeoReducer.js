import { locations } from "../constants/Geolocation";

export const GEO_SET_DATA = "GEO_SET_DATA";
export const GEO_SEARCH_DATA = "GEO_SEARCH_DATA";

const initialState = {
  selectedLocation: locations[0],
  searchArea: locations[0].name,
};

export default function GeoReducer(state = initialState, action) {
  switch (action.type) {
    case GEO_SET_DATA:
      const area = locations.find(
        (area) => area.id === parseInt(action.payload)
      );
      return { ...state, selectedLocation: area };
    case GEO_SEARCH_DATA:
      const searchKeywords = locations.find(
        (key) => key.name === action.payload
      );
      return { ...state, selectedLocation: searchKeywords };
    default:
      return state;
  }
}
