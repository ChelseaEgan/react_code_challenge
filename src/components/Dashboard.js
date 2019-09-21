import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import "../styles/Dashboard.css";

// Data source: https://www.wowhead.com/news=295075/classic-wow-realm-population-report-data-aggregated-through-community
const Alliance = [
  {
    name: "PvE",
    value: 390027
  },
  {
    name: "PvP",
    value: 607463
  },
  {
    name: "RP + RPPVP",
    value: 111006
  }
];

const Horde = [
  {
    name: "PvE",
    value: 224463
  },
  {
    name: "PvP",
    value: 795591
  },
  {
    name: "RP + RPPVP",
    value: 78438
  }
];

const Combined = [
  {
    name: "PvE",
    Alliance: 390027,
    Horde: 224463
  },
  {
    name: "PvP",
    Alliance: 607463,
    Horde: 795591
  },
  {
    name: "RP + RPPVP",
    Alliance: 111006,
    Horde: 78438
  }
];

class Dashboard extends React.Component {
  allianceColor = "#144587";
  hordeColor = "#8c1616";

  render() {
    if (this.props.chartType === "0") {
      return (
        <div>
          <h1>Dashboard</h1>
          <ResponsiveContainer width="80%" height={250} className="chart">
            <PieChart>
              <Tooltip />
              <Pie
                data={Alliance}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill={this.allianceColor}
              />
              <Pie
                data={Horde}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill={this.hordeColor}
              />
            </PieChart>
          </ResponsiveContainer>
          <p>US WoW Classic Population Distrubtion by Server Type</p>
        </div>
      );
    } else if (this.props.chartType === "1") {
      return (
        <div>
          <h1>Dashboard</h1>
          <ResponsiveContainer width="80%" height={250} className="chart">
            <BarChart data={Combined}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Alliance" fill={this.allianceColor} />
              <Bar dataKey="Horde" fill={this.hordeColor} />
            </BarChart>
          </ResponsiveContainer>
          <p>US WoW Classic Population Distrubtion by Server Type</p>
        </div>
      );
    } else {
      return <h1>Dashboard</h1>;
    }
  }
}

export default Dashboard;
