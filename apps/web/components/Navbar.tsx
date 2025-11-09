// apps/web/components/Navbar.tsx
"use client";

import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/60 backdrop-blur flex items-center justify-between px-6">
      <h1 className="font-medium text-lg tracking-tight">Welcome to LifeOS</h1>
      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
          <Bell size={18} />
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
