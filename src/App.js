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
import DepartmentView from "./ViewApi/Departments/DepartmentView";
import JobView from "./ViewApi/Jobs/JobView";
import DependentView from "./ViewApi/Dependents/DependentView";
// import EmployeeView from "./ViewApi/EmployeeView";
// import ProjectView from "./ViewApi/ProjectView";
// import AssignmentView from "./ViewApi/AssignmentView";

function App() {
  return (
    <div>
      <div style={{ margin: "10px", padding: "10px" }}>
        <DependentView />
      </div>
    </div>
  );
}

export default App;
