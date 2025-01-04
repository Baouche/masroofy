import React, { useEffect, useRef } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Reports = ({ transactions }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      if (chartInstance) {
        chartInstance.destroy(); // Destroy the old chart instance
      }
    }
  }, [transactions]);

  const pieData = {
    labels: ["Groceries", "Transportation", "Entertainment", "Other"],
    datasets: [
      {
        data: [3000, 2000, 1000, 1500], // Example data, should be dynamically calculated
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March"], // Example months
    datasets: [
      {
        label: "Income",
        data: [5000, 6000, 7000], // Example data, should be dynamically calculated
        backgroundColor: "#36A2EB",
      },
      {
        label: "Expenses",
        data: [2000, 3000, 4000], // Example data, should be dynamically calculated
        backgroundColor: "#FF6384",
      },
    ],
  };

  return (
    <div className="reports">
      <h2>Visual Reports</h2>
      <div className="chart">
        <Pie data={pieData} ref={chartRef} />
      </div>
      <div className="chart">
        <Bar data={barData} ref={chartRef} />
      </div>
    </div>
  );
};

export default Reports;
