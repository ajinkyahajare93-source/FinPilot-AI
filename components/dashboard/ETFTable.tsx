"use client";

import {
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Plus,
} from "lucide-react";

const etfs = [
  {
    symbol: "NIFTYBEES",
    name: "Nippon India ETF Nifty 50",
    price: "₹278.65",
    change: "+1.82%",
    aum: "₹18.5B",
  },
  {
    symbol: "BANKBEES",
    name: "Nippon India ETF Bank BeES",
    price: "₹563.20",
    change: "+2.45%",
    aum: "₹9.8B",
  },
  {
    symbol: "GOLDBEES",
    name: "Nippon India ETF Gold BeES",
    price: "₹74.15",
    change: "-0.35%",
    aum: "₹12.1B",
  },
  {
    symbol: "ITBEES",
    name: "Nippon India ETF IT",
    price: "₹42.80",
    change: "+0.91%",
    aum: "₹3.2B",
  },
];

export default function ETFTable() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold">
            ETF Watchlist
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Track your favorite ETFs
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500">
          Explore ETFs
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10 text-left text-sm text-slate-400">

              <th className="pb-4">ETF</th>

              <th className="pb-4">Price</th>

              <th className="pb-4">Change</th>

              <th className="pb-4">AUM</th>

              <th className="pb-4 text-right">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {etfs.map((etf) => {

              const positive = etf.change.startsWith("+");

              return (

                <tr
                  key={etf.symbol}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >

                  <td className="py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 font-bold text-white">
                        {etf.symbol.slice(0, 2)}
                      </div>

                      <div>

                        <h3 className="font-semibold">
                          {etf.symbol}
                        </h3>

                        <p className="text-sm text-slate-400">
                          {etf.name}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="font-medium">
                    {etf.price}
                  </td>

                  <td>

                    <div
                      className={`flex items-center gap-1 font-medium ${
                        positive
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >

                      {positive ? (
                        <ArrowUpRight size={16} />
                      ) : (
                        <ArrowDownRight size={16} />
                      )}

                      {etf.change}

                    </div>

                  </td>

                  <td className="text-slate-300">
                    {etf.aum}
                  </td>

                  <td>

                    <div className="flex justify-end gap-2">

                      <button className="rounded-xl bg-white/5 p-2 transition hover:bg-blue-500/20">
                        <Eye size={18} />
                      </button>

                      <button className="rounded-xl bg-blue-600 p-2 transition hover:bg-blue-500">
                        <Plus size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}