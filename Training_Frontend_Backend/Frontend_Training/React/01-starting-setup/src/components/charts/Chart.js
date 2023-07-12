import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const datapointvalues = props.datapoints.map((datapoint) => datapoint.value);
  const totalmaximum = Math.max(...datapointvalues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={totalmaximum}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
}
export default Chart;

