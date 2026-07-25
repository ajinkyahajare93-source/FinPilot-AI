import DashboardCards from "@/components/dashboard/DashboardCards";
import PortfolioChart from "@/components/dashboard/PortfolioChart";
import Watchlist from "@/components/dashboard/Watchlist";
import MarketNews from "@/components/dashboard/MarketNews";
import AIAssistant from "@/components/dashboard/AIAssistant";
import ETFTable from "@/components/dashboard/ETFTable";
import PortfolioAllocation from "@/components/dashboard/PortfolioAllocation";
import TopMovers from "@/components/dashboard/TopMovers";
import MarketHeatmap from "@/components/dashboard/MarketHeatmap";
import StockSearch from "@/components/dashboard/StockSearch";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        {/* Left */}
        <div>
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
            👋 Welcome Back
          </span>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight">
            Good Morning, Akshat
          </h1>

          <p className="mt-3 text-lg text-slate-400">
            Here's your financial market overview for today.
          </p>
        </div>

        {/* Right */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <p className="text-sm text-slate-400">Today</p>

          <h2 className="mt-2 text-2xl font-bold">
            Friday, 25 July 2026
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <button className="rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-500">
              Analyze Stock
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium transition hover:bg-white/10">
              AI Report
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Cards */}
      <DashboardCards />

      {/* Portfolio Chart + Watchlist */}
      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PortfolioChart />
        </div>

        <Watchlist />
      </div>

      {/* AI Assistant + Search */}
      <div className="grid gap-8 lg:grid-cols-2">
        <AIAssistant />
        <StockSearch />
      </div>

      {/* News + Top Movers */}
      <div className="grid gap-8 lg:grid-cols-2">
        <MarketNews />
        <TopMovers />
      </div>

      {/* ETF + Portfolio Allocation */}
      <div className="grid gap-8 lg:grid-cols-2">
        <ETFTable />
        <PortfolioAllocation />
      </div>

      {/* Market Heatmap */}
      <MarketHeatmap />
    </div>
  );
}