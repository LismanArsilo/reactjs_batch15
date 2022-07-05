import React, { Component } from "react";
import ChildName from "./ChildName";

export default class ParentName extends Component {
  state = {
    firstName: "Lisman",
    lastName: "Arsilo",
  };
  render() {
    return (
      <ChildName
        firstName={this.state.firstName}
        lastName={this.state.lastName}
      />
    );
  }
}
