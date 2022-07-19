import * as ActionType from "../Constant/CountryConstant";

const INIT_STATE = {
  countries: [],
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
      return AddcountrySucceed(state, action);
    default:
      return GetCountrySucceed(state, action);
  }
};

const GetCountrySucceed = (state, action) => {
  return { ...state, countries: action.payload };
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

const AddcountrySucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    countries: [...state.countries, payload],
  };
};

export default CountriesReducer;
