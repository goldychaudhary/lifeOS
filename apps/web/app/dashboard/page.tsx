"use client";

import { useDashboardDataQuery } from "gql";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function DashboardPage() {
  const { data, loading, error } = useDashboardDataQuery();

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>Error loading dashboard: {error.message}</p>;

  const { totalBalance, monthlyIncome, monthlyExpense } = data?.dashboardData ?? {};

  const chartData = [
    { name: "Income", value: monthlyIncome },
    { name: "Expense", value: monthlyExpense },
  ];

  return (
    <div className="space-y-8">
      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">
        <DashboardCard title="Total Balance" value={`₹${totalBalance?.toLocaleString()}`} />
        <DashboardCard title="Monthly Income" value={`₹${monthlyIncome?.toLocaleString()}`} />
        <DashboardCard title="Monthly Expense" value={`₹${monthlyExpense?.toLocaleString()}`} />
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Income vs Expense</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold mt-2">{value}</h2>
    </div>
  );
}
