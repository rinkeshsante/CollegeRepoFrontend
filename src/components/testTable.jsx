import React, { Component } from "react";

export class TestTable extends Component {
  render() {
    return (
      <div>
        <table
          id="dtBasicExample"
          class="table table-striped table-bordered table-sm"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th class="th-sm">Name</th>
              <th class="th-sm">Position</th>
              <th class="th-sm">Office</th>
              <th class="th-sm">Age</th>
              <th class="th-sm">Start date</th>
              <th class="th-sm">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TestTable;
