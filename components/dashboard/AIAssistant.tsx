"use client";

import {
  BrainCircuit,
  Sparkles,
  Send,
  Mic,
} from "lucide-react";

const suggestions = [
  "Analyze Reliance stock",
  "Suggest top ETFs for long-term",
  "Compare TCS vs Infosys",
  "Summarize today's market news",
];

export default function AIAssistant() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4">
          <BrainCircuit className="h-8 w-8 text-white" />
        </div>

        <div>
          <h2 className="text-xl font-bold">
            FinPilot AI
          </h2>

          <p className="text-sm text-slate-400">
            Your AI Financial Copilot
          </p>
        </div>
      </div>

      {/* AI Response */}
      <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />

          <p className="font-medium text-cyan-300">
            AI Insight
          </p>
        </div>

        <p className="mt-3 leading-7 text-slate-300">
          Based on recent market momentum, diversified ETFs continue
          to provide a balanced risk profile. Technology stocks remain
          strong, but monitor earnings announcements over the next week.
        </p>
      </div>

      {/* Suggestions */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-medium text-slate-400">
          Suggested Prompts
        </p>

        <div className="flex flex-wrap gap-3">
          {suggestions.map((item) => (
            <button
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:border-blue-500/30 hover:bg-blue-500/10"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="mt-8 flex items-center gap-3">
        <input
          type="text"
          placeholder="Ask FinPilot AI..."
          className="flex-1 rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 outline-none transition focus:border-blue-500"
        />

        <button className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
          <Mic className="h-5 w-5" />
        </button>

        <button className="rounded-2xl bg-blue-600 p-3 transition hover:bg-blue-500">
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}