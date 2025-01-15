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

const Graph = () => {
  const [timePeriod, setTimePeriod] = useState("week"); // Default time period is 'week'

  const data = {
    week: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "Weekly Performance",
          data: [150, 250, 235, 220, 180, 150, 260],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    month: {
      labels: [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
        "9th",
        "10th",
        "11th",
        "12th",
      ],
      datasets: [
        {
          label: "Monthly Performance",
          data: [180, 200, 220, 210, 190, 240, 250, 230, 210, 180, 170, 260],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    year: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Yearly Performance",
          data: [150, 170, 180, 200, 210, 190, 250, 240, 220, 230, 250, 260],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
  };

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
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
          text: "Performance",
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
            text: "Values",
          },
          min: 0,
          max: 300,
          ticks: {
            stepSize: 50,
          },
        },
      },
    },
  };

  return (
    <div
      className="bg-white p-12 rounded-lg shadow-md border border-gray-300"
      style={{ width: "48%", maxWidth: "1000px", height: "350px" }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Revenue Overview</div>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              timePeriod === "week" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTimePeriodChange("week")}
          >
            Week
          </button>
          <button
            className={`px-4 py-1 rounded-lg ${
              timePeriod === "month" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTimePeriodChange("month")}
          >
            Month
          </button>
          <button
            className={`px-4 py-1 rounded-lg ${
              timePeriod === "year" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => handleTimePeriodChange("year")}
          >
            Year
          </button>
        </div>
      </div>
      <Line data={data[timePeriod]} options={config.options} />
    </div>
  );
};

export default Graph;
