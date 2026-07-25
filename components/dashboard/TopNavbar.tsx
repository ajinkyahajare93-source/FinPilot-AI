"use client";

import {
  Search,
  Bell,
  Moon,
  UserCircle2,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-8">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative w-[420px]">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search Stocks, ETFs..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none backdrop-blur-xl transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Market Indices */}
          <div className="hidden xl:flex items-center gap-5">
            <div className="rounded-xl bg-green-500/10 px-4 py-2">
              <div className="text-xs text-slate-400">
                NIFTY 50
              </div>

              <div className="flex items-center gap-1 text-green-400 font-semibold">
                <TrendingUp size={14} />
                +0.82%
              </div>
            </div>

            <div className="rounded-xl bg-green-500/10 px-4 py-2">
              <div className="text-xs text-slate-400">
                SENSEX
              </div>

              <div className="flex items-center gap-1 text-green-400 font-semibold">
                <TrendingUp size={14} />
                +0.65%
              </div>
            </div>

            <div className="rounded-xl bg-red-500/10 px-4 py-2">
              <div className="text-xs text-slate-400">
                NASDAQ
              </div>

              <div className="flex items-center gap-1 text-red-400 font-semibold">
                <TrendingDown size={14} />
                -0.42%
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-500/20">
            <Bell size={20} />
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-500/20">
            <Moon size={20} />
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-blue-500/20">
            <UserCircle2 size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}