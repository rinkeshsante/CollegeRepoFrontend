import React, { Component } from "react";
import DetailView from "./detailView";
import MyMdal from "./myModal";

export class MoreOption extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <MyMdal
          header={data.name ? data.name : data.id}
          modalId={data.id}
          buttonName="about it"
        >
          <DetailView data={data} />
        </MyMdal>
      </div>
    );
  }
}

export default MoreOption;
