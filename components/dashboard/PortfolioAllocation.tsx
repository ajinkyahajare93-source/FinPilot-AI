"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Stocks", value: 45, color: "#3B82F6" },
  { name: "ETFs", value: 30, color: "#06B6D4" },
  { name: "Gold", value: 15, color: "#FACC15" },
  { name: "Cash", value: 10, color: "#22C55E" },
];

export default function PortfolioAllocation() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold">
          Portfolio Allocation
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Distribution of your investments
        </p>
      </div>

      {/* Chart */}
      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              innerRadius={75}
              outerRadius={105}
              paddingAngle={4}
              dataKey="value"
            >

              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Legend */}

      <div className="mt-6 space-y-4">

        {data.map((item) => (

          <div
            key={item.name}
            className="flex items-center justify-between rounded-2xl bg-slate-900/50 p-4"
          >

            <div className="flex items-center gap-3">

              <div
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="font-medium">
                {item.name}
              </span>

            </div>

            <div className="text-right">

              <p className="font-semibold">
                {item.value}%
              </p>

              <p className="text-xs text-slate-400">
                Allocation
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}