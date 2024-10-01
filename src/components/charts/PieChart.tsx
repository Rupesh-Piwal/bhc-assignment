"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const pieChartData = {
  labels: ["Doctor Visit", "Homecare", "On Demand Service", "Caretaker"],
  datasets: [
    {
      label: "Sample Data",
      data: [40, 30, 15, 15],
      backgroundColor: ["#089D29", "#3767B1", "#4B0A5B", "#2CB5BD"],
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
  const colors = pieChartData.datasets[0].backgroundColor;
  const labels = pieChartData.labels;

  return (
    <div className="flex flex-col items-center">

      <Pie data={pieChartData} options={options} />

      <div className="flex flex-wrap justify-center mt-4">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center mx-2 my-1">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: colors[index] }}
            ></div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
