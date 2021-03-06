import React from "react";
import styles from "./Chart.module.css";
import { Line } from "react-chartjs-2";

const Chart = (props) => {
    console.log({props});
  const colorPicker = ["#FAF8F0", "#A7E9E1", "#FBC7C3", "#F7F4E7", "#B6DF82"];

  return (
    <div className={styles.container}>
      <>
        <Line
          data={{
            labels: props.chartLabels,
            datasets: [
              {
                data: props.chartData,
                label: "Results",
                borderColor: "#3333ff",
                fill: true,
                  backgroundColor: colorPicker.map(
                      () => colorPicker[Math.round(Math.random() * 2)]
                  ),
              },
            ],
          }}
        />
      </>
    </div>
  );
};
export default Chart;
