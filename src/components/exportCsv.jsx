import React, { Component } from "react";
import CsvDownload from "react-json-to-csv";
import axios from "axios";

import { ApiEndpoint } from "../config.json";
const BASE_URL = ApiEndpoint;

export class ExportCSV extends Component {
  render() {
    return (
      <div>
        <CsvDownload data={[]}></CsvDownload>
      </div>
    );
  }
}

export default ExportCSV;
