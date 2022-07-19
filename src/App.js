// import logo from "./logo.svg";
import "./App.css";
// import Counter from "./component/Counter";
// import CounterArrow from "./component/CounterArrow";
// import CounterHook from "./component/CounterHook";
// import ParentName from "./ParentChild/ParentName";
// import ParentComponent from "./ParentChild/ParentComponent";
// import Employee from "./List/Employee";
// import ChartItem from "./List/ChartItem";
// import EmployeeFrom from "./form/EmployeeFrom";
// import ChartList from "./form/ChartList";
// import CartList from "./Redux/View/CartListRedux";

// Menampilkan Menggunakan api
// import RegionView from "./ViewApi/Regions/RegionView";
// import CountryView from "./ViewApi/Countries/CountryView";
// import LocationView from "./ViewApi/Locations/LocationView";
// import DepartmentView from "./ViewApi/Departments/DepartmentView";
// import JobView from "./ViewApi/Jobs/JobView";
// import DependentView from "./ViewApi/Dependents/DependentView";
// import EmployeeView from "./ViewApi/Employees/EmployeeView";
// import ProjectView from "./ViewApi/ProjectView";
// import AssignmentView from "./ViewApi/AssignmentView";

// Dengan Saga
import RegionView from "./ViewSaga/Regions/Region";
import RegionAdd from "./ViewSaga/Regions/RegionAdd";
import CountryView from "./ViewSaga/Countries/Country";
//Memberikan Style
import "./style/style.css";

// Mengatur Router
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainLayout />}></Route>
          <Route path="/region" element={<RegionView />}></Route>
          <Route path="/region/add" element={<RegionAdd />}></Route>
          {/* <Route path="/country" element={<CountryView />}></Route> */}
          {/* <Route path="/country" element={<CountryView />}></Route>
          <Route path="/location" element={<LocationView />}></Route>
          <Route path="/department" element={<DepartmentView />}></Route>
          <Route path="/employee" element={<EmployeeView />}></Route> */}

          <Route path="*" element={<Navigate to="/404" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
