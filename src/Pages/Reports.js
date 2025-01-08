import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Reports = ({ transactions }) => {
  const categories = ["Groceries", "Transportation", "Entertainment", "Other"];
  const pieData = {
    labels: categories,
    datasets: [
      {
        data: categories.map((cat) =>
          transactions
            .filter((t) => t.category === cat)
            .reduce((sum, t) => sum + t.amount, 0)
        ),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March"], 
    datasets: [
      {
        label: "Income",
        data: transactions.map((t) => t.amount), 
        backgroundColor: "#36A2EB",
      },
      {
        label: "Expenses",
        data: transactions.map((t) => -t.amount), 
        backgroundColor: "#FF6384",
      },
    ],
  };

  return (
    <div className="reports">
      <h2>Visual Reports</h2>
      <div className="chart">
        <Pie data={pieData} />
      </div>
      <div className="chart">
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Reports;
