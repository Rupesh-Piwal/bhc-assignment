"use client"; // Ensure this is at the top if you're using Next.js with server components
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components for the Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data for the PieChart
const pieChartData = {
  labels: ["Category A", "Category B", "Category C", "Category D"], // Define your labels
  datasets: [
    {
      label: "Sample Data",
      data: [40, 30, 15, 15], // Sample data
      backgroundColor: [
        "#089D29", // Color for Category A
        "#3767B1", // Color for Category B
        "#4B0A5B", // Color for Category C
        "#2CB5BD", // Color for Category C
      ],
    },
  ],
};

// Options to hide labels and tooltips
const options = {
  plugins: {
    legend: {
      display: false, // Disable the legend
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
  },
};

// PieChart functional component
const PieChart: React.FC = () => {
  return <Pie data={pieChartData} options={options} />;
};

// Export the PieChart component
export default PieChart;
