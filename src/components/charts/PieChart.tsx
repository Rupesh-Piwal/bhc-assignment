"use client"; 
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);


const pieChartData = {
  labels: ["Category A", "Category B", "Category C", "Category D"], 
  datasets: [
    {
      label: "Sample Data",
      data: [40, 30, 15, 15], 
      backgroundColor: [
        "#089D29", 
        "#3767B1", 
        "#4B0A5B", 
        "#2CB5BD", 
      ],
    },
  ],
};


const options = {
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: false, 
    },
  },
};


const PieChart: React.FC = () => {
  return <Pie data={pieChartData} options={options} />;
};


export default PieChart;
