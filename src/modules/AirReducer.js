export const AIR_SET_LOADING = "AIR_SET_LOADING";
export const AIR_HAS_ERROR = "AIR_HAS_ERROR";
export const AIR_SET_DATA = "AIR_SET_DATA";
export const AIR_SELECTED_DATA = "AIR_SELECTED_DATA";

const initialState = {
  airs: [],
  selectedAir: undefined,
  status: "idle",
};

export default function AirReducer(state = initialState, action) {
  switch (action.type) {
    case AIR_SET_LOADING:
      return { ...state, status: "loading" };
    case AIR_HAS_ERROR:
      return { ...state, status: "error" };
    case AIR_SET_DATA:
      return { ...state, airs: action.payload, status: "completed" };
    case AIR_SELECTED_DATA:
      return { ...state, selectedAir: action.payload };
    default:
      return state;
  }
}
