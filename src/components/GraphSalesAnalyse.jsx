import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphSaleAnaylysis = () => {
  const [timePeriod, setTimePeriod] = useState("7days"); // Default time period is '7days'

  const data = {
    "7days": {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "7 Days Sales",
          data: [80000, 250000, 95000, 180050, 120500, 360000, 190000],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    "30days": {
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      datasets: [
        {
          label: "30 Days Sales",
          data: Array.from({ length: 30 }, () =>
            Math.floor(Math.random() * 30000)
          ),
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    "3months": {
      labels: ["Month 1", "Month 2", "Month 3"],
      datasets: [
        {
          label: "Last 3 Months Sales",
          data: [180000, 1700000, 1855550],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  };

  const handleTimePeriodChange = (e) => {
    setTimePeriod(e.target.value);
  };

  const config = {
    type: "line",
    data: data[timePeriod],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Sales Analysis",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(context.parsed.y);
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Time Period",
          },
        },
        y: {
          title: {
            display: true,
            text: "Sales (INR)",
          },
          min: 0,
          ticks: {
            callback: function (value) {
              return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
                maximumSignificantDigits: 3,
              }).format(value);
            },
          },
        },
      },
    },
  };

  return (
    <div
      className="bg-white sm:p-12 mt-4 rounded-lg shadow-md border border-gray-300 w-full flex flex-col items-center justify-center"
      style={{ height: "400px" }}
    >
      <div className="flex justify-end items-center text-sm mb-4 w-full">
        <select
          className=" sm:px-4 sm:py-2 rounded-lg bg-gray-200 text-xs sm:text-base"
          value={timePeriod}
          onChange={handleTimePeriodChange}
        >
          <option value="7days">Last 7 Days</option>
          <option value="30days">Last 30 Days</option>
          <option value="3months">Last 3 Months</option>
        </select>
      </div>
      <Line data={data[timePeriod]} options={config.options} />
    </div>
  );
};

export default GraphSaleAnaylysis;
