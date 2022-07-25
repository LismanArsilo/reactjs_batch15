import { call, put } from "redux-saga/effects";
import employeeApi from "../../api/employeeApi";
import {
  GetEmployeeSuccess,
  GetEmployeeFailed,
  AddEmployeeSuccess,
  AddEmployeeFailed,
  DelEmployeeSuccess,
  DelEmployeeFailed,
  GetOneEmployeeSuccess,
  GetOneEmployeeFailed,
  EditEmployeeSuccess,
  EditEmployeeFailed,
  EditNoEmployeeSuccess,
  EditNoEmployeeFailed,
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

function* handleGetOneEmployee(action) {
  const { payload } = action;
  try {
    const result = yield call(employeeApi.findOne, payload);
    yield put(GetOneEmployeeSuccess(result));
  } catch (error) {
    yield put(GetOneEmployeeFailed(error));
  }
}

function* handleEditEmployee(action) {
  const { payload } = action;
  try {
    const result = yield call(employeeApi.editEmployee, payload);
    yield put(EditEmployeeSuccess(result.data[1]));
  } catch (error) {
    yield put(EditEmployeeFailed(error));
  }
}

function* handleEditNoEmployee(action) {
  const { payload } = action;
  try {
    const result = yield call(employeeApi.editNoEmployee, payload);
    yield put(EditNoEmployeeSuccess(result.data[1]));
  } catch (error) {
    yield put(EditNoEmployeeFailed(error));
  }
}

export {
  handleAddEmployee,
  handleGetEmployee,
  handleDelEmployee,
  handleGetOneEmployee,
  handleEditEmployee,
  handleEditNoEmployee,
};
