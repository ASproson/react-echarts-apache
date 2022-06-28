import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const options = {
    // title: {
    //   text: "B633: Empty Bins by Aisle",
    //   left: "center",
    // },
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
        data: [
          { name: "Column 0", value: 820 },
          { name: "Column 1", value: 932 },
          { name: "Column 2", value: 901 },
          { name: "Column 3", value: 934 },
          { name: "Column 4", value: 1290 },
          { name: "Column 5", value: 1330 },
          { name: "Column 6", value: 1320 },
        ],
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
