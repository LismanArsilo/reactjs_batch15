import { combineReducers } from "redux";
import CountriesReducer from "./CountryReducer";
import EmployeeReducer from "./EmployeeReducer";
import RegionsReducer from "./RegionReducer";

const rootReducer = combineReducers({
  regionStated: RegionsReducer,
  countryStated: CountriesReducer,
  employeeStated: EmployeeReducer,
});
export default rootReducer;
