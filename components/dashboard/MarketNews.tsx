"use client";

import {
  ArrowUpRight,
  Clock3,
  Newspaper,
} from "lucide-react";

import { newsData } from "@/constants/dashboard";

export default function MarketNews() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold">
            Market News
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Latest financial headlines
          </p>
        </div>

        <div className="rounded-xl bg-blue-500/10 p-3">
          <Newspaper className="h-5 w-5 text-blue-400" />
        </div>

      </div>

      <div className="space-y-4">

        {newsData.map((news, index) => (

          <div
            key={index}
            className="group rounded-2xl border border-transparent bg-slate-900/50 p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900"
          >

            <div className="flex items-start justify-between gap-4">

              <div>

                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                  {news.category}
                </span>

                <h3 className="mt-3 text-lg font-semibold leading-7 transition group-hover:text-blue-400">
                  {news.title}
                </h3>

                <div className="mt-4 flex items-center gap-5 text-sm text-slate-400">

                  <div className="flex items-center gap-1">
                    <Clock3 className="h-4 w-4" />
                    {news.time}
                  </div>

                  <span>
                    {news.source}
                  </span>

                </div>

              </div>

              <button className="rounded-xl bg-white/5 p-3 transition hover:bg-blue-500/20">
                <ArrowUpRight className="h-5 w-5" />
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}