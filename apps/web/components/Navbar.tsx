"use client";

import { usePathname } from "next/navigation";

const routeTitles: Record<string, string> = {
  "/": "Dashboard",
  "/dashboard": "Dashboard",
  "/transactions": "Transactions",
  "/accounts": "Accounts",
  "/analytics": "Analytics",
  "/settings": "Settings",
};

export default function Navbar() {
  const pathname = usePathname();
  const title = routeTitles[pathname];

  return (
    <header className="h-16 flex items-center justify-between border-b bg-white px-6 shadow-sm">
      <h1 className="text-xl font-semibold">{title}</h1>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          + New
        </button>
      </div>
    </header>
  );
}
