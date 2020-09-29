import React, { Component } from "react";

export class DetailView extends Component {
  render() {
    const { header = "", data = {} } = this.props;

    return (
      <div>
        <h3>{header}</h3>
        {Object.entries(data).map(([key, value]) => {
          return (
            <div className="row">
              <div className="col">{key}</div>
              <div className="col">: {value.toString()}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DetailView;
