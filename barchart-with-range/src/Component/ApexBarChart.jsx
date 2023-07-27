// ChartComponent.js
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { SubArrayLengths, NewSubRangesArray, SubArrays } from "./ApiHitsData";
import BarTable from "./BarTable";

function generateDynamicColors(length) {
  const materialDesignColors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];

  const colors = [];

  for (let i = 0; i < length; i++) {
    colors.push(materialDesignColors[i % materialDesignColors.length]);
  }

  return colors;
}

// Usage example: generate an array of 5 dynamic and unique colors
const colors = generateDynamicColors(SubArrayLengths.length);
console.log("colors : ", colors);

// const colors = ["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8",];

const ApexBarChart = () => {
  const [show, setShow] = useState(false);
  const [listData, setListData] = useState([]);
  const [series, setSeries] = useState([{ data: SubArrayLengths }]);

  const handleClick = (dataPointIndex) => {
    if (dataPointIndex !== -1) {
      alert("bar with index " + dataPointIndex + " clicked");
      console.log(SubArrays[dataPointIndex]);
      setListData(SubArrays[dataPointIndex]);
      setShow(true);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const categoriesNew = NewSubRangesArray.map(
    (ele, index) => `[${ele[0]},${ele[1]}]`
  );
  console.log("categoriesNew : ", categoriesNew);


  // Custom tooltip formatter function to show the length of the bar
  const customTooltip = ({ series, seriesIndex, dataPointIndex, w }) => {
    const barLength = SubArrayLengths[dataPointIndex];
    return `𝒍𝒆𝒏𝒈𝒕𝒉: ${barLength}`;
  };

  // Set the options for the chart
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (event, chartContext, config) {
          const dataPointIndex = config.dataPointIndex;
          handleClick(dataPointIndex);
        },
      },
    },
    colors: colors,
    plotOptions: { bar: { columnWidth: "45%", distributed: true } },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: categoriesNew,
      labels: {
        style: {
          colors: colors,
          fontSize: "12px",
        },
      },
    },
    // tooltip: {
    // },
    tooltip: {
      custom: customTooltip,
      theme: "light",     
    },
  });

  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
      {show && <BarTable listData={listData} handleClose={handleClose} />}
    </>
  );
};

export default ApexBarChart;
