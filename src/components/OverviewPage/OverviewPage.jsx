import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OverviewPage = () => {
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-side-psi-eight.vercel.app/browseTask")
      .then((res) => res.json())
      .then((data) => {
        setAllTask(data);
      });
  }, []);

  // Safely parse bidsCount as integer, default 0 if invalid
  const totalBids = allTask.reduce((sum, task) => {
    const bids = parseInt(task.bidsCount, 10);
    return sum + (isNaN(bids) ? 0 : bids);
  }, 0);

  // Safely parse budget as float, default 0 if invalid
  const totalBudget = allTask.reduce((sum, task) => {
    const budgetNum = parseFloat(task.budget);
    return sum + (isNaN(budgetNum) ? 0 : budgetNum);
  }, 0);

  // Get start of today for filtering upcoming tasks
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter tasks with valid deadlines >= today, sort ascending, take first 3
  const upcomingTasks = allTask
    .filter((task) => {
      if (!task.deadline) return false;
      const deadlineDate = new Date(task.deadline);
      return !isNaN(deadlineDate.getTime()) && deadlineDate >= today;
    })
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .slice(0, 3);

  // Create chart data: count tasks per category
  const categoryCountMap = allTask.reduce((acc, task) => {
    if (task.category) {
      acc[task.category] = (acc[task.category] || 0) + 1;
    }
    return acc;
  }, {});

  const chartData = Object.entries(categoryCountMap).map(([category, count]) => ({
    category,
    count,
  }));

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-base-content">Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Tasks</h2>
            <p className="text-4xl font-bold">{allTask.length}</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Bids</h2>
            <p className="text-4xl font-bold text-info">{totalBids}</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Budget</h2>
            <p className="text-4xl font-bold text-success">${totalBudget.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-base-100 shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Tasks per Category</h2>
        {chartData.length === 0 ? (
          <p className="text-base-content/70">No task data available.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" stroke="#8884d8" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-base-100 rounded-xl shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
        {upcomingTasks.length === 0 ? (
          <p className="text-base-content/70">No upcoming tasks.</p>
        ) : (
          <ul className="space-y-3">
            {upcomingTasks.map((task) => (
              <li
                key={task._id}
                className="flex justify-between items-center border-b pb-2 border-base-300"
              >
                <div>
                  <p className="font-medium text-base-content">{task.title}</p>
                  <p className="text-sm text-base-content/70">{task.category}</p>
                </div>
                <span className="text-sm text-error font-semibold">
                  {new Date(task.deadline).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OverviewPage;
