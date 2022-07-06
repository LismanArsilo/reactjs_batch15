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
import RegionView from "./ViewApi/RegionView";
import CountryView from "./ViewApi/CountryView";
import LocationView from "./ViewApi/LocationView";
import DepartmentView from "./ViewApi/DepartmentView";
import JobView from "./ViewApi/JobView";
import DependentView from "./ViewApi/DependentView";
import EmployeeView from "./ViewApi/EmployeeView";
import ProjectView from "./ViewApi/ProjectView";
import AssignmentView from "./ViewApi/AssignmentView";

function App() {
  return (
    <div
      style={{
        display: "flex",
        border: "solid 5px",
        margin: "5px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "solid 1px",
          margin: "10px",
          padding: "10px",
        }}
      >
        <RegionView />
      </div>

      <div style={{ border: "solid 1px", margin: "10px", padding: "10px" }}>
        <CountryView />
      </div>

      <div style={{ border: "solid 1px", margin: "10px", padding: "10px" }}>
        <LocationView />
      </div>

      <div style={{ border: "solid 1px", margin: "10px", padding: "10px" }}>
        <DepartmentView />
      </div>

      <div style={{ border: "solid 1px", margin: "10px", padding: "10px" }}>
        <JobView />
      </div>

      <div style={{ border: "solid 1px", margin: "10px", padding: "10px" }}>
        <DependentView />
      </div>

      <div style={{ border: "solid 1px", margin: "10px", padding: "10px" }}>
        <EmployeeView />
      </div>

      <div style={{ border: "solid 1px", margin: "10px", padding: "10px" }}>
        <ProjectView />
      </div>

      <div style={{ border: "solid 1px", margin: "10px", padding: "10px" }}>
        <AssignmentView />
      </div>
    </div>
  );
}

export default App;
