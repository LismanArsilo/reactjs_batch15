import * as ActionType from "../Constant/LocationConstant";

const INIT_STATE = {
  locations: [],
  location: [],
};

const LocationsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_LOCATIONS_REQUEST:
      return { ...state };
    case ActionType.GET_LOCATIONS_SUCCESS:
      return GetLocationSucceed(state, action);
    case ActionType.DEL_LOCATIONS_REQUEST:
      return { ...state };
    case ActionType.DEL_LOCATIONS_SUCCESS:
      return DelLocationSucceed(state, action);
    case ActionType.ADD_LOCATIONS_REQUEST:
      return { ...state };
    case ActionType.ADD_LOCATIONS_SUCCESS:
      return AddLocationSucceed(state, action);
    case ActionType.GETONE_LOCATIONS_REQUEST:
      return { ...state };
    case ActionType.GETONE_LOCATIONS_SUCCESS:
      return GetOneLocationSucceed(state, action);
    case ActionType.EDIT_LOCATIONS_REQUEST:
      return { ...state };
    case ActionType.EDIT_LOCATIONS_SUCCESS:
      return EditLocationSucceed(state, action);
    default:
      return GetLocationSucceed(state, action);
  }
};

const GetLocationSucceed = (state, action) => {
  return { ...state, locations: action.payload };
};

const GetOneLocationSucceed = (state, action) => {
  return { ...state, location: action.payload };
};

const DelLocationSucceed = (state, action) => {
  const { payload } = action;
  const filterLocation = state.locations.filter(
    (el) => el.location_id !== payload
  );
  return {
    ...state,
    locations: [...filterLocation],
  };
};

const AddLocationSucceed = (state, action) => {
  const { payload } = action;
  return { ...state, locations: [...state.locations, payload] };
};

const EditLocationSucceed = (state, action) => {
  const { payload } = action;
  const filterLocation = state.locations.filter(
    (el) => el.location_id !== payload.location_id
  );
  return { ...state, locations: [...filterLocation, payload] };
};

export default LocationsReducer;
