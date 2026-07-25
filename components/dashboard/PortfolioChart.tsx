"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { portfolioData } from "@/constants/dashboard";

export default function PortfolioChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>
          <p className="text-sm uppercase tracking-widest text-slate-400">
            Portfolio Growth
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            ₹12,67,000
          </h2>

          <p className="mt-2 text-green-400 font-medium">
            ▲ +8.25% This Month
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 px-6 py-4">
          <p className="text-sm text-slate-400">
            Overall Return
          </p>

          <h3 className="text-2xl font-bold">
            +24.18%
          </h3>
        </div>

      </div>

      {/* Chart */}
      <div className="h-[360px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={portfolioData}>

            <defs>

              <linearGradient
                id="portfolioGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#3b82f6"
                  stopOpacity={0.4}
                />

                <stop
                  offset="100%"
                  stopColor="#3b82f6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={4}
              fill="url(#portfolioGradient)"
              dot={{
                r: 5,
                fill: "#3b82f6",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}