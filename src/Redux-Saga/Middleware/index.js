import { takeEvery, all } from "redux-saga/effects";
import {
  handleAddRegion,
  handleDelRegion,
  handleGetRegion,
} from "./RegionMiddle";
import {
  handleAddCountry,
  handleDelCountry,
  handleGetCountry,
} from "./CountryMiddle";
import {
  handleAddEmployee,
  handleGetEmployee,
  handleDelEmployee,
} from "./EmployeeMiddle";
import * as ActionTypeRegion from "../Constant/RegionConstant";
import * as ActionTypeCountry from "../Constant/CountryConstant";
import * as ActionTypeEmployee from "../Constant/EmployeeConstant";

export default function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_REGIONS_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.DEL_REGIONS_REQUEST, handleDelRegion),
    takeEvery(ActionTypeRegion.ADD_REGIONS_REQUEST, handleAddRegion),
    takeEvery(ActionTypeCountry.GET_COUNTRIES_REQUEST, handleGetCountry),
    takeEvery(ActionTypeCountry.DEL_COUNTRIES_REQUEST, handleDelCountry),
    takeEvery(ActionTypeCountry.ADD_COUNTRIES_REQUEST, handleAddCountry),
    takeEvery(ActionTypeEmployee.GET_EMPLOYEE_REQUEST, handleGetEmployee),
    takeEvery(ActionTypeEmployee.DEL_EMPLOYEE_REQUEST, handleDelEmployee),
    takeEvery(ActionTypeEmployee.ADD_EMPLOYEE_REQUEST, handleAddEmployee),
  ]);
}
