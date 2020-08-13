import { locations } from "../constants/Geolocation";

export const GEO_SET_DATA = "GEO_SET_DATA";

const initialState = {
  selectedLocation: locations[0],
};

export default function GeoReducer(state = initialState, action) {
  switch (action.type) {
    case GEO_SET_DATA:
      const area = locations.find(
        (area) => area.id === parseInt(action.payload)
      );

      return { ...state, selectedLocation: area };
    default:
      return state;
  }
}
