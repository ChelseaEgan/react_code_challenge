import React from "react";
import { Radio } from "react-bootstrap";

import "../styles/Settings.css";

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      pieChartSelected: this.props.chartType === "0" ? true : false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.chartType !== prevProps.chartType) {
      this.setState({
        pieChartSelected: this.props.chartType === "0" ? true : false
      });
    }
  }

  handleChange(event) {
    this.props.updateSettings(event.target.value);
  }

  render() {
    return (
      <div className="settings-container">
        <h1>Settings</h1>
        <h2>Chart Type</h2>
        <div className="btn-group">
          <label
            className={
              "btn btn-default " + (this.state.pieChartSelected ? "active" : "")
            }
          >
            <Radio
              name="chartOptions"
              value={0}
              defaultChecked={this.state.pieChartSelected}
              onChange={this.handleChange}
            >
              Pie Chart
            </Radio>
          </label>
          <label
            className={
              "btn btn-default " +
              (!this.state.pieChartSelected ? "active" : "")
            }
          >
            <Radio
              name="chartOptions"
              value={1}
              defaultChecked={!this.state.pieChartSelected}
              onChange={this.handleChange}
            >
              Bar Chart
            </Radio>
          </label>
        </div>
      </div>
    );
  }
}

export default Settings;
