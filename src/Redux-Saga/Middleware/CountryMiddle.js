import { call, put } from "redux-saga/effects";
import countryApi from "../../api/countryApi";
import {
  GetCountrySuccess,
  GetCountryFailed,
  DelCountrySuccess,
  DelCountryFailed,
  AddCountrySuccess,
  AddCountryFailed,
} from "../Action/CountryAction";

function* handleGetCountry() {
  try {
    const result = yield call(countryApi.listCountry);
    yield put(
      GetCountrySuccess(
        result.sort(function (a, b) {
          return a.country_id - b.country_id;
        })
      )
    );
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
export { handleAddCountry, handleGetCountry, handleDelCountry };
