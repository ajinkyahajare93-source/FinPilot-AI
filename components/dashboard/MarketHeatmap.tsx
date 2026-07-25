"use client";

const heatmap = [
  {
    symbol: "RELIANCE",
    change: "+3.25%",
    color: "bg-green-600",
    size: "col-span-2 row-span-2",
  },
  {
    symbol: "TCS",
    change: "+2.14%",
    color: "bg-green-500",
    size: "",
  },
  {
    symbol: "INFY",
    change: "-1.32%",
    color: "bg-red-500",
    size: "",
  },
  {
    symbol: "HDFCBANK",
    change: "+1.08%",
    color: "bg-green-500",
    size: "",
  },
  {
    symbol: "ICICIBANK",
    change: "+0.94%",
    color: "bg-green-400",
    size: "",
  },
  {
    symbol: "ITC",
    change: "-0.82%",
    color: "bg-red-400",
    size: "",
  },
  {
    symbol: "LT",
    change: "+1.76%",
    color: "bg-green-500",
    size: "",
  },
  {
    symbol: "SBIN",
    change: "-0.64%",
    color: "bg-red-400",
    size: "",
  },
];

export default function MarketHeatmap() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold">
          Market Heatmap
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Live performance across major stocks
        </p>
      </div>

      {/* Heatmap */}
      <div className="grid auto-rows-[110px] grid-cols-4 gap-4">

        {heatmap.map((stock) => (

          <div
            key={stock.symbol}
            className={`${stock.color} ${stock.size}
              flex cursor-pointer flex-col justify-between rounded-2xl
              p-5 transition-all duration-300
              hover:scale-105 hover:shadow-xl`}
          >

            <h3 className="text-lg font-bold text-white">
              {stock.symbol}
            </h3>

            <p className="text-2xl font-bold text-white">
              {stock.change}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}