import { combineReducers } from "redux";
import CountriesReducer from "./CountryReducer";
import EmployeeReducer from "./EmployeeReducer";
import LocationsReducer from "./LocationReducer";
import RegionsReducer from "./RegionReducer";

const rootReducer = combineReducers({
  regionStated: RegionsReducer,
  countryStated: CountriesReducer,
  employeeStated: EmployeeReducer,
  locationStated: LocationsReducer,
});
export default rootReducer;
