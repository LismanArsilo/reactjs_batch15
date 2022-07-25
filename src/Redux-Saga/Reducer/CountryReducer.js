import * as ActionType from "../Constant/CountryConstant";

const INIT_STATE = {
  countries: [],
  country: [],
};

const CountriesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.GET_COUNTRIES_SUCCESS:
      return GetCountrySucceed(state, action);
    case ActionType.DEL_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.DEL_COUNTRIES_SUCCESS:
      return DelCountrySucceed(state, action);
    case ActionType.ADD_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.ADD_COUNTRIES_SUCCESS:
      return AddCountrySucceed(state, action);
    case ActionType.GETONE_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.GETONE_COUNTRIES_SUCCESS:
      return GetOneCountrySucceed(state, action);
    case ActionType.EDIT_COUNTRIES_REQUEST:
      return { ...state };
    case ActionType.EDIT_COUNTRIES_SUCCESS:
      return EditCountrySucceed(state, action);
    default:
      return GetCountrySucceed(state, action);
  }
};

const GetCountrySucceed = (state, action) => {
  return { ...state, countries: action.payload };
};

const GetOneCountrySucceed = (state, action) => {
  return { ...state, country: action.payload };
};

const DelCountrySucceed = (state, action) => {
  const { payload } = action;
  const filterCountry = state.countries.filter(
    (el) => el.country_id !== payload
  );
  return {
    ...state,
    countries: [...filterCountry],
  };
};

const AddCountrySucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    countries: [...state.countries, payload],
  };
};

const EditCountrySucceed = (state, action) => {
  const { payload } = action;
  const filterCountry = state.countries.filter(
    (el) => el.country_id !== payload.country_id
  );
  return {
    ...state,
    countries: [...filterCountry, payload],
  };
};

export default CountriesReducer;
