import React from "react";
import TableFilter from "react-table-filter";
import "./App.css";
import { Data } from "./Data";
import "react-table-filter/lib/styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: Data
    };
    this.filterUpdated = this.filterUpdated.bind(this);
  }

  filterUpdated(newData) {
    this.setState({
      episodes: newData
    });
  }

  render() {
    const episodes = this.state.episodes;
    const elementsHtml = episodes.map((item, index) => {
      return (
        <tr key={"row_" + index}>
          <td className="cell1">{item.no}</td>
          <td className="cell1">{item.project}</td>
          <td className="cell1">{item.status}</td>
        </tr>
      );
    });
    return (
      <div>
        <div className="nav-bar">
          <div className="container">React Table Filters</div>
        </div>
        <div className="examples">
          <div className="basic">
            <h3 className="header">Basic Usage</h3>
            <table className="basic-table">
              <thead>
                <TableFilter
                  rows={episodes}
                  onFilterUpdate={this.filterUpdated}
                >
                  <th
                    key="name"
                    filterkey="name"
                    className="cell"
                    showsearch={"true"}
                  >
                    S. No
                  </th>
                  <th key="project" filterkey="project" className="cell">
                    Project
                  </th>
                  <th
                    key="status"
                    filterkey="status"
                    className="cell"
                    alignleft={"true"}
                  >
                    Status
                  </th>
                </TableFilter>
              </thead>
              <tbody>{elementsHtml}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
