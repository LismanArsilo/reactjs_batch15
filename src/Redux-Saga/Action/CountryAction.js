import * as ActionType from "../Constant/CountryConstant";

export const GetCountryRequest = () => ({
  type: ActionType.GET_COUNTRIES_REQUEST,
});
export const GetCountrySuccess = (payload) => ({
  type: ActionType.GET_COUNTRIES_SUCCESS,
  payload,
});
export const GetCountryFailed = (payload) => ({
  type: ActionType.GET_COUNTRIES_FAILED,
  payload,
});
export const DelCountryRequest = (payload) => ({
  type: ActionType.DEL_COUNTRIES_REQUEST,
  payload,
});
export const DelCountrySuccess = (payload) => ({
  type: ActionType.DEL_COUNTRIES_SUCCESS,
  payload,
});
export const DelCountryFailed = (payload) => ({
  type: ActionType.DEL_COUNTRIES_FAILED,
  payload,
});
export const AddCountryRequest = (payload) => ({
  type: ActionType.ADD_COUNTRIES_REQUEST,
  payload,
});
export const AddCountrySuccess = (payload) => ({
  type: ActionType.ADD_COUNTRIES_SUCCESS,
  payload,
});
export const AddCountryFailed = (payload) => ({
  type: ActionType.ADD_COUNTRIES_FAILED,
  payload,
});
