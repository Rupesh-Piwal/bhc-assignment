"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const ThreeWavesChart = () => {
  const data = {
    labels: [
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
    ],
    datasets: [
      {
        label: "Wave 1",
        data: [0, 42, 22, 84, 65, 96, 42, 58, 34, 80, 0, 100],
        fill: true,
        borderColor: "#3767B1",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Wave 2",
        data: [16, 65, 38, 105, 82, 119, 65, 81, 55, 95, 17, 120],
        fill: true,
        borderColor: "#FF9F6A",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Wave 3",
        data: [40, 80, 65, 115, 93, 126, 77, 93, 69, 110, 42, 113],
        fill: true,
        borderColor: "#4FD312",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 130,
        ticks: {
          stepSize: 10,
        },
      },
      x: {
        grid: {
          display: false, 
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ThreeWavesChart;
