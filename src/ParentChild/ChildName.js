import React, { Component } from "react";

export default class ChildName extends Component {
  render() {
    return (
      <div>
        <h1>firstName : {this.props.firstName}</h1>
        <h1>firstName : {this.props.lastName}</h1>
      </div>
    );
  }
}
