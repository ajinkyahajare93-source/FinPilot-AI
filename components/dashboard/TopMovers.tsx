"use client";

import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const gainers = [
  {
    symbol: "RELIANCE",
    company: "Reliance Industries",
    price: "₹3,210.45",
    change: "+4.21%",
  },
  {
    symbol: "TCS",
    company: "Tata Consultancy",
    price: "₹4,125.30",
    change: "+3.82%",
  },
  {
    symbol: "HDFCBANK",
    company: "HDFC Bank",
    price: "₹1,730.25",
    change: "+2.67%",
  },
];

const losers = [
  {
    symbol: "INFY",
    company: "Infosys",
    price: "₹1,845.60",
    change: "-2.15%",
  },
  {
    symbol: "WIPRO",
    company: "Wipro Ltd.",
    price: "₹528.70",
    change: "-1.74%",
  },
];

export default function TopMovers() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Top Movers
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Best and worst performers today
          </p>
        </div>
      </div>

      {/* Top Gainers */}
      <div>

        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-400" />
          <h3 className="font-semibold text-green-400">
            Top Gainers
          </h3>
        </div>

        <div className="space-y-3">
          {gainers.map((stock) => (
            <div
              key={stock.symbol}
              className="flex items-center justify-between rounded-2xl bg-slate-900/50 p-4 transition hover:bg-slate-900"
            >
              <div>
                <h4 className="font-semibold">{stock.symbol}</h4>
                <p className="text-sm text-slate-400">
                  {stock.company}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">{stock.price}</p>

                <div className="mt-1 flex items-center justify-end gap-1 text-green-400">
                  <ArrowUpRight size={16} />
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Divider */}
      <div className="my-6 border-t border-white/10" />

      {/* Top Losers */}
      <div>

        <div className="mb-3 flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-red-400" />
          <h3 className="font-semibold text-red-400">
            Top Losers
          </h3>
        </div>

        <div className="space-y-3">
          {losers.map((stock) => (
            <div
              key={stock.symbol}
              className="flex items-center justify-between rounded-2xl bg-slate-900/50 p-4 transition hover:bg-slate-900"
            >
              <div>
                <h4 className="font-semibold">{stock.symbol}</h4>
                <p className="text-sm text-slate-400">
                  {stock.company}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">{stock.price}</p>

                <div className="mt-1 flex items-center justify-end gap-1 text-red-400">
                  <ArrowDownRight size={16} />
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}