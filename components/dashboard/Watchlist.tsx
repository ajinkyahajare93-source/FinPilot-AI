"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { watchlistData } from "@/constants/dashboard";

export default function Watchlist() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Watchlist</h2>
          <p className="mt-1 text-sm text-slate-400">
            Your favorite market assets
          </p>
        </div>

        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10">
          View All
        </button>
      </div>

      {/* Stocks */}
      <div className="space-y-4">
        {watchlistData.map((stock) => {
          const positive = stock.change.startsWith("+");

          return (
            <div
              key={stock.name}
              className="group flex items-center justify-between rounded-2xl border border-transparent bg-slate-900/50 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-bold text-white">
                  {stock.name.slice(0, 2)}
                </div>

                <div>
                  <h3 className="font-semibold">{stock.name}</h3>

                  <p className="text-sm text-slate-400">
                    {stock.symbol}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="text-right">
                <h3 className="font-semibold">
                  ₹{stock.price}
                </h3>

                <div
                  className={`mt-1 flex items-center justify-end gap-1 text-sm font-medium ${
                    positive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {positive ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowDownRight size={16} />
                  )}

                  {stock.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}