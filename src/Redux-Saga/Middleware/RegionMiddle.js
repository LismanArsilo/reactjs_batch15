import { call, put } from "redux-saga/effects";
import regionApi from "../../api/regionApi";
import {
  GetRegionSuccess,
  GetRegionFailed,
  DelRegionSuccess,
  DelRegionFailed,
  AddRegionSuccess,
  AddRegionFailed,
  GetOneRegionSuccess,
  GetOneRegionFailed,
  EditRegionSuccess,
  EditRegionFailed,
} from "../Action/RegionAction";

function* handleGetRegion() {
  try {
    const result = yield call(regionApi.listRegion);
    yield put(
      GetRegionSuccess(
        result.sort(function (a, b) {
          return a.region_id - b.region_id;
        })
      )
    );
  } catch (error) {
    yield put(GetRegionFailed(error));
  }
}
function* handleDelRegion(action) {
  const { payload } = action;
  try {
    yield call(regionApi.deletedRegion, payload);
    yield put(DelRegionSuccess(payload));
  } catch (error) {
    yield put(DelRegionFailed(error));
  }
}
function* handleAddRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(regionApi.createRegion, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}
function* handleGetOneRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(regionApi.findOne, payload);
    yield put(GetOneRegionSuccess(result));
  } catch (error) {
    yield put(GetOneRegionFailed(error));
  }
}
function* handleEditRegion(action) {
  const { payload } = action;
  try {
    const result = yield call(regionApi.editRegion, payload);
    yield put(EditRegionSuccess(result.data));
  } catch (error) {
    yield put(EditRegionFailed(error));
  }
}

export {
  handleGetRegion,
  handleAddRegion,
  handleDelRegion,
  handleGetOneRegion,
  handleEditRegion,
};
