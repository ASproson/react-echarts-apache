import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const arrOne = ["0-3", "3-5", "5-7", "> 7"];
  const arrTwo = [2800, 1600, 3200, 4000];
  let lst = [];

  for (let i = 0; i < arrOne.length; i++) {
    lst.push({ name: arrOne[i], value: arrTwo[i] });
  }

  const options = {
    label: {
      formatter: "{c} \n {d}%",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Pie demo",
        type: "pie",
        raduis: "50%",
        data: lst,
        emphasis: {
          itemStyle: {
            shadowBlue: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0,0,0,0.5)",
          },
        },
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default PieChart;
