"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import "../app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <ApolloProvider client={client}>
          <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
              <div className="p-6 text-2xl font-bold tracking-tight border-b border-gray-800">
                lifeOS
              </div>

              <nav className="flex-1 p-4 space-y-2">
                {[
                  "Dashboard",
                  "Transactions",
                  "Accounts",
                  "Analytics",
                  "Settings",
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    {item}
                  </button>
                ))}
              </nav>

              <div className="p-4 border-t border-gray-800 text-sm">
                <p className="opacity-70">Logged in as</p>
                <p className="font-medium">Goldy Singh</p>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
              {/* Navbar */}
              <header className="h-16 flex items-center justify-between border-b bg-white px-6">
                <h1 className="text-xl font-semibold">Dashboard</h1>

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

              {/* Page content */}
              <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                {children}
              </main>
            </div>
          </div>
        </ApolloProvider>
      </body>
    </html>
  );
}
