"use client"; // Ensure this is at the top if you're using Next.js with server components
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register the required components for the Bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Sample data for the bar chart
  const data = {
    labels: ["Total Consultations", "Cancelled", "Completed"], // Labels for the bars
    datasets: [
      {
        data: [37000, 14000, 30000], // Data for each bar, update as needed
        backgroundColor: ["#3767B1", "#FD6F6F", "#72DC41"],
        borderColor: ["#3767B1", "#FD6F6F", "#72DC41"],
        borderWidth: 1, // Width of the bar borders
        barThickness: 78, // Set the bar width to 78 pixels
      },
    ],
  };

  // Options for customizing the chart
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensures the y-axis starts at 0
        max: 40000, // Set maximum value on the y-axis
        ticks: {
          stepSize: 10000, // Set step size for better granularity
          callback: (value) => {
            // Render string labels directly
            if (value === 10000) return "10k";
            if (value === 20000) return "20k";
            if (value === 30000) return "30k";
            if (value === 40000) return "40k";
            if (value === 50000) return "50k";
            if (value === 60000) return "60k";
            if (value === 70000) return "70k";
            if (value === 80000) return "80k";
            return value; // Fallback to numeric value if no match
          },
        },
      },
      x: {
        grid: {
          display: false, // Hide vertical grid lines if desired
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
