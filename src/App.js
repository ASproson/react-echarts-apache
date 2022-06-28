import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div className="App">
      <h1>React Apache ECharts</h1>

      <div
        style={{
          width: "600px",
          height: "max",
          margin: "0 auto",
          marginBottom: 50,
        }}
      >
        <h3>B633: Empty Bins by Aisle</h3>
        <BarChart />
      </div>

      <div
        style={{
          width: "600px",
          height: "max",
          margin: "0 auto",
          marginBottom: 50,
        }}
      >
        <h3>B633: Empty Bins by Aisle</h3>
        <LineChart />
      </div>

      <div
        style={{
          width: "600px",
          height: "max",
          margin: "0 auto",
          marginBottom: 100,
        }}
      >
        <h3>B633: Empty Bins by Aisle</h3>
        <PieChart />
      </div>
    </div>
  );
}

export default App;
