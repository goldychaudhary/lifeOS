import "../app/globals.css";
import Sidebar from "../components/Sidebar";
import ClientProviders from "../components/ClientProviders"; // ✅ Import our new client wrapper

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <ClientProviders>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
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

              <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                {children}
              </main>
            </div>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
