import { call, put } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import {
  GetEmployeeSuccess,
  GetEmployeeFailed,
  AddEmployeeSuccess,
  AddEmployeeFailed,
  DelEmployeeSuccess,
  DelEmployeeFailed,
} from "../Action/EmployeeAction";

function* handleGetEmployee() {
  try {
    const result = yield call(employeeApi.listEmployee);
    yield put(
      GetEmployeeSuccess(
        result.sort(function (a, b) {
          return a.employee_id - b.employee_id;
        })
      )
    );
  } catch (error) {
    yield put(GetEmployeeFailed(error));
  }
}

function* handleDelEmployee(action) {
  const { payload } = action;
  try {
    yield call(employeeApi.deletedEmployee, payload);
    yield put(DelEmployeeSuccess(payload));
  } catch (error) {
    yield put(DelEmployeeFailed(error));
  }
}

function* handleAddEmployee(action) {
  const { payload } = action;
  try {
    const result = yield call(employeeApi.createEmployee, payload);
    yield put(AddEmployeeSuccess(result.data));
  } catch (error) {
    yield put(AddEmployeeFailed(error));
  }
}

export { handleAddEmployee, handleGetEmployee, handleDelEmployee };
