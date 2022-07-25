import * as ActionType from "../Constant/LocationConstant";

export const GetLocationRequest = () => ({
  type: ActionType.GET_LOCATIONS_REQUEST,
});
export const GetLocationSuccess = (payload) => ({
  type: ActionType.GET_LOCATIONS_SUCCESS,
  payload,
});
export const GetLocationFailed = (payload) => ({
  type: ActionType.GET_LOCATIONS_FAILED,
  payload,
});

export const DelLocationRequest = (payload) => ({
  type: ActionType.DEL_LOCATIONS_REQUEST,
  payload,
});
export const DelLocationSuccess = (payload) => ({
  type: ActionType.DEL_LOCATIONS_SUCCESS,
  payload,
});
export const DelLocationFailed = (payload) => ({
  type: ActionType.DEL_LOCATIONS_FAILED,
  payload,
});

export const AddLocationRequest = (payload) => ({
  type: ActionType.ADD_LOCATIONS_REQUEST,
  payload,
});
export const AddLocationSuccess = (payload) => ({
  type: ActionType.ADD_LOCATIONS_SUCCESS,
  payload,
});
export const AddLocationFailed = (payload) => ({
  type: ActionType.ADD_LOCATIONS_FAILED,
  payload,
});

export const GetOneLocationRequest = (payload) => ({
  type: ActionType.GETONE_LOCATIONS_REQUEST,
  payload,
});
export const GetOneLocationSuccess = (payload) => ({
  type: ActionType.GETONE_LOCATIONS_SUCCESS,
  payload,
});
export const GetOneLocationFailed = (payload) => ({
  type: ActionType.GETONE_LOCATIONS_FAILED,
  payload,
});

export const EditLocationRequest = (payload) => ({
  type: ActionType.EDIT_LOCATIONS_REQUEST,
  payload,
});
export const EditLocationSuccess = (payload) => ({
  type: ActionType.EDIT_LOCATIONS_SUCCESS,
  payload,
});
export const EditLocationFailed = (payload) => ({
  type: ActionType.EDIT_LOCATIONS_FAILED,
  payload,
});
