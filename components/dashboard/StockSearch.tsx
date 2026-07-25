"use client";

import {
  Search,
  TrendingUp,
  Plus,
  Sparkles,
} from "lucide-react";

const trendingStocks = [
  {
    symbol: "RELIANCE",
    company: "Reliance Industries",
    change: "+2.31%",
  },
  {
    symbol: "TCS",
    company: "Tata Consultancy",
    change: "+1.08%",
  },
  {
    symbol: "INFY",
    company: "Infosys Ltd",
    change: "-0.72%",
  },
  {
    symbol: "HDFCBANK",
    company: "HDFC Bank",
    change: "+0.95%",
  },
];

export default function StockSearch() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Stock Explorer
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Search, analyze & track stocks
          </p>
        </div>

        <div className="rounded-xl bg-blue-500/10 p-3">
          <Search className="h-5 w-5 text-blue-400" />
        </div>
      </div>

      {/* Search */}
      <div className="relative mt-6">

        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search stocks, ETFs, mutual funds..."
          className="w-full rounded-2xl border border-white/10 bg-slate-900/60 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500"
        />

      </div>

      {/* AI Suggestion */}
      <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">

        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />

          <p className="font-semibold text-cyan-300">
            AI Recommendation
          </p>
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          Technology and Banking sectors are showing strong momentum.
          Consider comparing TCS, Infosys and HDFC Bank before investing.
        </p>

      </div>

      {/* Trending */}
      <div className="mt-8">

        <div className="mb-4 flex items-center gap-2">

          <TrendingUp className="h-5 w-5 text-green-400" />

          <h3 className="font-semibold">
            Trending Stocks
          </h3>

        </div>

        <div className="space-y-3">

          {trendingStocks.map((stock) => (

            <div
              key={stock.symbol}
              className="flex items-center justify-between rounded-2xl bg-slate-900/50 p-4 transition hover:bg-slate-900"
            >

              <div>

                <h4 className="font-semibold">
                  {stock.symbol}
                </h4>

                <p className="text-sm text-slate-400">
                  {stock.company}
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span
                  className={`font-medium ${
                    stock.change.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {stock.change}
                </span>

                <button className="rounded-xl bg-blue-600 p-2 transition hover:bg-blue-500">
                  <Plus className="h-4 w-4" />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}