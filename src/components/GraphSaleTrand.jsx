import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const SalesTrendsGraph = () => {
  const [timePeriod, setTimePeriod] = useState("daily");
  const [viewType, setViewType] = useState("bar"); // Toggle between "bar" and "line"
  const [showCumulative, setShowCumulative] = useState(false);

  // Data for different time periods
  const data = {
    daily: {
      labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      datasets: [
        {
          label: "Daily Sales (INR)",
          data: Array.from({ length: 24 }, () =>
            Math.floor(Math.random() * 10000)
          ),
          backgroundColor: "rgba(52, 152, 219, 0.6)",
          borderColor: "rgba(41, 128, 185, 1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(26, 188, 156, 0.8)",
          barThickness: 16,
        },
      ],
    },
    weekly: {
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
          label: "Weekly Sales (INR)",
          data: [75000, 95000, 90000, 92000, 120000, 135000, 146000],
          backgroundColor: "rgba(46, 204, 113, 0.6)",
          borderColor: "rgba(39, 174, 96, 1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(241, 196, 15, 0.8)",
          barThickness: 16,
        },
      ],
    },
    monthly: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      datasets: [
        {
          label: "Monthly Sales (INR)",
          data: Array.from({ length: 30 }, () =>
            Math.floor(Math.random() * 10000)
          ),
          backgroundColor: "rgba(231, 76, 60, 0.6)",
          borderColor: "rgba(192, 57, 43, 1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(142, 68, 173, 0.8)",
          barThickness: 16,
        },
      ],
    },
    yearly: {
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
          label: "Yearly Sales (INR)",
          data: [
            150000, 170000, 180000, 200000, 210000, 190000, 250000, 240000,
            220000, 230000, 250000, 260000,
          ],
          backgroundColor: "rgba(155, 89, 182, 0.6)",
          borderColor: "rgba(142, 68, 173, 1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(231, 76, 60, 0.8)",
          barThickness: 16,
        },
      ],
    },
  };

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
    setShowCumulative(false);
  };

  const toggleViewType = () => {
    setViewType((prev) => (prev === "bar" ? "line" : "bar"));
  };

  const toggleCumulative = () => {
    setShowCumulative((prev) => !prev);
  };

  const cumulativeData = () => {
    const originalData = data[timePeriod].datasets[0].data;
    return originalData.reduce((acc, value, index) => {
      if (index === 0) {
        acc.push(value);
      } else {
        acc.push(value + acc[index - 1]);
      }
      return acc;
    }, []);
  };

  const graphData = {
    labels: data[timePeriod].labels,
    datasets: [
      {
        ...data[timePeriod].datasets[0],
        data: showCumulative
          ? cumulativeData()
          : data[timePeriod].datasets[0].data,
        label: showCumulative
          ? "Cumulative Sales (INR)"
          : data[timePeriod].datasets[0].label,
      },
    ],
  };

  const config = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `Sales Trends (${
          timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)
        })`,
        font: {
          size: 20,
          weight: "bold",
        },
        color: "#2c3e50",
      },
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 14,
          },
          color: "#2c3e50",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `Sales: ${new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(context.raw)}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Period",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: { display: false },
      },
      y: {
        title: {
          display: true,
          text: "Sales (INR)",
          font: {
            size: 16,
            weight: "bold",
          },
        },
        grid: { color: "rgba(0, 0, 0, 0.1)" },
      },
    },
  };

  return (
    <div
      className="p-6 rounded-lg shadow-lg bg-white w-full lg:w-3/4 xl:w-2/3"
      style={{ height: "450px" }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">Sales Trends</div>
        <div className="flex items-center space-x-4">
          <select
            className="px-4 py-2 rounded-lg bg-gray-200"
            value={timePeriod}
            onChange={(e) => handleTimePeriodChange(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button
            className="px-4 py-2 rounded-lg bg-gray-200"
            onClick={toggleViewType}
          >
            Toggle View ({viewType === "bar" ? "Line" : "Bar"})
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-gray-200"
            onClick={toggleCumulative}
          >
            {showCumulative ? "Show Individual" : "Show Cumulative"}
          </button>
        </div>
      </div>
      {viewType === "bar" ? (
        <Bar data={graphData} options={config} />
      ) : (
        <Line data={graphData} options={config} />
      )}
    </div>
  );
};

export default SalesTrendsGraph;
