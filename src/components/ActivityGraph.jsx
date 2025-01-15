import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityGraph = () => {
  const [timePeriod, setTimePeriod] = useState("week");
  const [showAllData, setShowAllData] = useState(false);

  // Data for different time periods
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
          label: "User Activity (Bar) - Week",
          data: [750, 950, 900, 920, 1200, 1350, 1460],
          backgroundColor: "#0c0d7c",
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
          label: "User Activity (Bar) - Month",
          data: [180, 200, 220, 210, 190, 240, 250, 230, 210, 180, 170, 260],
          backgroundColor: "#0c0d7c",
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
          label: "User Activity (Bar) - Year",
          data: [150, 170, 180, 200, 210, 190, 250, 240, 220, 230, 250, 260],
          backgroundColor: "#0c0d7c",
        },
      ],
    },
  };

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
    setShowAllData(false);
  };

  const handleViewAll = () => {
    setShowAllData(true);
  };

  const combinedData = {
    labels: [...data.week.labels, ...data.month.labels, ...data.year.labels],
    datasets: [
      ...data.week.datasets,
      ...data.month.datasets,
      ...data.year.datasets,
    ],
  };

  const config = {
    type: "bar",
    data: showAllData ? combinedData : data[timePeriod], // Show combined data if "View All" is clicked
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "User Activity",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Time Period",
          },
          ticks: {
            autoSkip: true, // Automatically skip labels if they overlap
          },
        },
        y: {
          title: {
            display: true,
            text: "Activity Level",
          },
          min: 0,
          max: 1500, // Adjust max to accommodate higher values
          ticks: {
            stepSize: 250, // Adjust step size to scale properly
          },
        },
      },
    },
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[80%] xl:w-[60%] border border-gray-300"
      style={{ width: "48%", maxWidth: "1000px", height: "350px" }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">User Activity</div>
        <div className="mt-4 text-center">
          <button
            className="px-6 py-2 text-black font-semibold rounded-lg"
            onClick={handleViewAll}
          >
            View All
          </button>
        </div>
      </div>
      <Bar
        data={showAllData ? combinedData : data[timePeriod]}
        options={config.options}
      />
    </div>
  );
};

export default ActivityGraph;
