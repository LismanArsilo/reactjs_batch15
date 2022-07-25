import { takeEvery, all } from "redux-saga/effects";
import {
  handleAddRegion,
  handleDelRegion,
  handleGetRegion,
  handleGetOneRegion,
  handleEditRegion,
} from "./RegionMiddle";
import {
  handleAddCountry,
  handleDelCountry,
  handleGetCountry,
  handleGetOneCountry,
  handleEditCountry,
} from "./CountryMiddle";
import {
  handleAddEmployee,
  handleGetEmployee,
  handleDelEmployee,
  handleGetOneEmployee,
  handleEditEmployee,
  handleEditNoEmployee,
} from "./EmployeeMiddle";
import {
  handleGetLocation,
  handleDelLocation,
  handleAddLocation,
  handleGetOneLocation,
  handleEditLocation,
} from "./LocationMiddle";

import * as ActionTypeRegion from "../Constant/RegionConstant";
import * as ActionTypeCountry from "../Constant/CountryConstant";
import * as ActionTypeEmployee from "../Constant/EmployeeConstant";
import * as ActionTypeLocation from "../Constant/LocationConstant";

export default function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST, handleDelRegion),
    takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST, handleAddRegion),
    takeEvery(ActionTypeRegion.GETONE_REGIONS_REQUEST, handleGetOneRegion),
    takeEvery(ActionTypeRegion.EDIT_REGIONS_REQUEST, handleEditRegion),

    takeEvery(ActionTypeCountry.GET_COUNTRIES_REQUEST, handleGetCountry),
    takeEvery(ActionTypeCountry.DEL_COUNTRIES_REQUEST, handleDelCountry),
    takeEvery(ActionTypeCountry.ADD_COUNTRIES_REQUEST, handleAddCountry),
    takeEvery(ActionTypeCountry.GETONE_COUNTRIES_REQUEST, handleGetOneCountry),
    takeEvery(ActionTypeCountry.EDIT_COUNTRIES_REQUEST, handleEditCountry),

    takeEvery(ActionTypeLocation.GET_LOCATIONS_REQUEST, handleGetLocation),
    takeEvery(ActionTypeLocation.DEL_LOCATIONS_REQUEST, handleDelLocation),
    takeEvery(ActionTypeLocation.ADD_LOCATIONS_REQUEST, handleAddLocation),
    takeEvery(
      ActionTypeLocation.GETONE_LOCATIONS_REQUEST,
      handleGetOneLocation
    ),
    takeEvery(ActionTypeLocation.EDIT_LOCATIONS_REQUEST, handleEditLocation),

    takeEvery(ActionTypeEmployee.GET_EMPLOYEE_REQUEST, handleGetEmployee),
    takeEvery(ActionTypeEmployee.DEL_EMPLOYEE_REQUEST, handleDelEmployee),
    takeEvery(ActionTypeEmployee.ADD_EMPLOYEE_REQUEST, handleAddEmployee),
    takeEvery(ActionTypeEmployee.GETONE_EMPLOYEE_REQUEST, handleGetOneEmployee),
    takeEvery(ActionTypeEmployee.EDIT_EMPLOYEE_REQUEST, handleEditEmployee),
    takeEvery(
      ActionTypeEmployee.EDITNOFILE_EMPLOYEE_REQUEST,
      handleEditNoEmployee
    ),
  ]);
}
