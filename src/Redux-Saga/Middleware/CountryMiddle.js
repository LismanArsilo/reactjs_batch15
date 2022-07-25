import { call, put } from "redux-saga/effects";
import countryApi from "../../api/countryApi";
import {
  GetCountrySuccess,
  GetCountryFailed,
  DelCountrySuccess,
  DelCountryFailed,
  AddCountrySuccess,
  AddCountryFailed,
  GetOneCountrySuccess,
  GetOneCountryFailed,
  EditCountrySuccess,
  EditCountryFailed,
} from "../Action/CountryAction";

function* handleGetCountry() {
  try {
    const result = yield call(countryApi.listCountry);
    yield put(GetCountrySuccess(result));
  } catch (error) {
    yield put(GetCountryFailed(error));
  }
}
function* handleDelCountry(action) {
  const { payload } = action;
  try {
    yield call(countryApi.deletedCountry, payload);
    yield put(DelCountrySuccess(payload));
  } catch (error) {
    yield put(DelCountryFailed(error));
  }
}
function* handleAddCountry(action) {
  const { payload } = action;
  try {
    const result = yield call(countryApi.createCountry, payload);
    yield put(AddCountrySuccess(result.data));
  } catch (error) {
    yield put(AddCountryFailed(error));
  }
}
function* handleGetOneCountry(action) {
  const { payload } = action;
  try {
    const result = yield call(countryApi.findOne, payload);
    yield put(GetOneCountrySuccess(result));
  } catch (error) {
    yield put(GetOneCountryFailed(error));
  }
}
function* handleEditCountry(action) {
  const { payload } = action;
  try {
    const result = yield call(countryApi.editCountry, payload);
    yield put(EditCountrySuccess(result.data));
  } catch (error) {
    yield put(EditCountryFailed(error));
  }
}

export {
  handleAddCountry,
  handleGetCountry,
  handleDelCountry,
  handleGetOneCountry,
  handleEditCountry,
};
