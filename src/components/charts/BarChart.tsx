"use client"; 
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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {

  const data = {
    labels: ["Total Consultations", "Cancelled", "Completed"], 
    datasets: [
      {
        data: [37000, 14000, 30000], 
        backgroundColor: ["#3767B1", "#FD6F6F", "#72DC41"],
        borderColor: ["#3767B1", "#FD6F6F", "#72DC41"],
        borderWidth: 1, 
        barThickness: 78,
      },
    ],
  };

  
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
        beginAtZero: true, 
        max: 40000, 
        ticks: {
          stepSize: 10000, 
          callback: (value) => {
           
            if (value === 10000) return "10k";
            if (value === 20000) return "20k";
            if (value === 30000) return "30k";
            if (value === 40000) return "40k";
            if (value === 50000) return "50k";
            if (value === 60000) return "60k";
            if (value === 70000) return "70k";
            if (value === 80000) return "80k";
            return value;
          },
        },
      },
      x: {
        grid: {
          display: false, 
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
