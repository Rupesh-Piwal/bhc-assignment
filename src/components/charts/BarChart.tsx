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

  return (
    <div>
      <Bar data={data} options={options} />

      {/* Custom Legend */}
      <div className="flex justify-center mt-4 space-x-6">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            ></span>
            <span className="text-[#26323C] font-[400] text-[14px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
