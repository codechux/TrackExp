import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataValues = props.data.map((item) => item.value);
  const maxValues = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.data.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          label={point.label}
          maxValue={maxValues}
        />
      ))}
    </div>
  );
};

export default Chart;
