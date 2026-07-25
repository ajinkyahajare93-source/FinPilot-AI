"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  TrendingUp,
  Newspaper,
  Wallet,
  Bot,
  FileText,
  Settings,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard", active: true },
  { name: "Stocks", icon: TrendingUp, href: "#" },
  { name: "ETFs", icon: Wallet, href: "#" },
  { name: "News", icon: Newspaper, href: "#" },
  { name: "AI Assistant", icon: Bot, href: "#" },
  { name: "Reports", icon: FileText, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-slate-950/95 backdrop-blur-xl">

      {/* Logo */}
      <div className="border-b border-white/10 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-blue-400">
          FinPilot AI
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Financial Research Platform
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
                item.active
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>
              </div>

              <ChevronRight
                size={16}
                className="opacity-0 transition group-hover:opacity-100"
              />
            </Link>
          );
        })}
      </nav>

      {/* User Card */}
      <div className="border-t border-white/10 p-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
              A
            </div>

            <div>
              <h3 className="font-semibold">
                Akshat Kasliwal
              </h3>

              <p className="text-sm text-slate-400">
                Premium Plan
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs text-green-400">
              Online
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}