"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wallet, Book, Settings, CheckSquare } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Transactions", icon: Wallet, href: "/transactions" },
  { name: "Accounts", icon: Book, href: "/accounts" },
  { name: "Analytics", icon: CheckSquare, href: "/analytics" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold tracking-tight border-b border-gray-800">
        lifeOS
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(({ name, icon: Icon, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={name}
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                active
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800 text-sm">
        <p className="opacity-70">Logged in as</p>
        <p className="font-medium">Goldy Singh</p>
      </div>
    </aside>
  );
}
