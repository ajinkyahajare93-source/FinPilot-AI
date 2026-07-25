"use client";

import CountUp from "react-countup";
import {
  Wallet,
  TrendingUp,
  BrainCircuit,
  Activity,
} from "lucide-react";

const cards = [
  {
    title: "Portfolio Value",
    value: 1267000,
    prefix: "₹",
    suffix: "",
    change: "+8.25%",
    subtitle: "This Month",
    icon: Wallet,
    color: "text-green-400",
  },
  {
    title: "Today's Profit",
    value: 12580,
    prefix: "₹",
    suffix: "",
    change: "+2.14%",
    subtitle: "Today",
    icon: TrendingUp,
    color: "text-green-400",
  },
  {
    title: "AI Confidence",
    value: 94,
    prefix: "",
    suffix: "%",
    change: "+1.8%",
    subtitle: "Prediction Accuracy",
    icon: BrainCircuit,
    color: "text-cyan-400",
  },
  {
    title: "Market Status",
    value: 100,
    prefix: "",
    suffix: "%",
    change: "Open",
    subtitle: "Live Market",
    icon: Activity,
    color: "text-green-400",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Glow Effect */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-all duration-300 group-hover:bg-blue-500/20" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
                  {card.prefix}
                  <CountUp
                    end={card.value}
                    duration={2}
                    separator=","
                  />
                  {card.suffix}
                </h2>

                <div className="mt-4 flex items-center gap-2">
                  <span className={`font-semibold ${card.color}`}>
                    {card.change}
                  </span>

                  <span className="text-sm text-slate-500">
                    {card.subtitle}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4">
                <Icon className="h-7 w-7 text-cyan-400" />
              </div>
            </div>

            {/* Mini Trend */}
            <div className="relative mt-8 flex items-end gap-1">
              {[30, 40, 35, 50, 60, 70, 90].map((height, index) => (
                <div
                  key={index}
                  className="w-full rounded-full bg-blue-500/30"
                  style={{
                    height: `${height / 3}px`,
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}