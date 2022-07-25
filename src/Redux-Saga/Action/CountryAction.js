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
export const GetOneCountryRequest = (payload) => ({
  type: ActionType.GETONE_COUNTRIES_REQUEST,
  payload,
});
export const GetOneCountrySuccess = (payload) => ({
  type: ActionType.GETONE_COUNTRIES_SUCCESS,
  payload,
});
export const GetOneCountryFailed = (payload) => ({
  type: ActionType.GETONE_COUNTRIES_FAILED,
  payload,
});
export const EditCountryRequest = (payload) => ({
  type: ActionType.EDIT_COUNTRIES_REQUEST,
  payload,
});
export const EditCountrySuccess = (payload) => ({
  type: ActionType.EDIT_COUNTRIES_SUCCESS,
  payload,
});
export const EditCountryFailed = (payload) => ({
  type: ActionType.EDIT_COUNTRIES_FAILED,
  payload,
});
