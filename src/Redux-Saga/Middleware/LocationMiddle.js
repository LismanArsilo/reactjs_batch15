import { call, put } from "redux-saga/effects";
import locationApi from "../../api/locationApi";
import {
  GetLocationSuccess,
  GetLocationFailed,
  DelLocationSuccess,
  DelLocationFailed,
  AddLocationSuccess,
  AddLocationFailed,
  GetOneLocationSuccess,
  GetOneLocationFailed,
  EditLocationSuccess,
  EditLocationFailed,
} from "../Action/LocationAction";

function* handleGetLocation() {
  try {
    const result = yield call(locationApi.listLocation);
    yield put(
      GetLocationSuccess(
        result.sort(function (a, b) {
          return a.location_id - b.location_id;
        })
      )
    );
  } catch (error) {
    yield put(GetLocationFailed(error));
  }
}

function* handleDelLocation(action) {
  const { payload } = action;
  try {
    yield call(locationApi.deletedLocation, payload);
    yield put(DelLocationSuccess(payload));
  } catch (error) {
    yield put(DelLocationFailed(error));
  }
}

function* handleAddLocation(action) {
  const { payload } = action;
  try {
    const result = yield call(locationApi.createLocation, payload);
    yield put(AddLocationSuccess(result.data));
  } catch (error) {
    yield put(AddLocationFailed(error));
  }
}

function* handleGetOneLocation(action) {
  const { payload } = action;
  try {
    const result = yield call(locationApi.findOne, payload);
    yield put(GetOneLocationSuccess(result));
  } catch (error) {
    yield put(GetOneLocationFailed(error));
  }
}

function* handleEditLocation(action) {
  const { payload } = action;
  try {
    const result = yield call(locationApi.editLocation, payload);
    yield put(EditLocationSuccess(result.data));
  } catch (error) {
    yield put(EditLocationFailed(error));
  }
}

export {
  handleGetLocation,
  handleDelLocation,
  handleAddLocation,
  handleGetOneLocation,
  handleEditLocation,
};
