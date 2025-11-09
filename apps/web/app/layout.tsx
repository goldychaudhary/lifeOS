import "../app/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ClientProviders from "../components/ClientProviders";

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
              <Navbar />
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
