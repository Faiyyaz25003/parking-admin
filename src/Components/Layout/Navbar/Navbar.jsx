
"use client";
import React from "react";
import { Bell, User, LogOut, Menu } from "lucide-react";

export default function Navbar({ setIsMobileOpen, sidebarWidth }) {
  return (
    <header
      className={`w-[1190px] ml-[320px] h-20 bg-white shadow-lg px-6 flex items-center justify-between sticky top-0 z-30
        transition-all duration-300
        ${
          sidebarWidth
            ? `ml-[${sidebarWidth}px] lg:ml-[${sidebarWidth}px]`
            : "ml-0"
        }
      `}
    >
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden block text-[#1e88a8]"
      >
        <Menu size={28} />
      </button>

      {/* Page Title */}
      <h1 className="text-xl font-bold text-[#0f4c5c]">Admin Dashboard</h1>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="text-[#1e88a8]" size={26} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full text-white">
            5
          </span>
        </button>

        <button>
          <User size={26} className="text-[#1e88a8]" />
        </button>

        <button className="flex gap-2 items-center text-sm font-semibold text-[#1e88a8] hover:text-red-500">
          <LogOut size={22} />
          Logout
        </button>
      </div>
    </header>
  );
}
