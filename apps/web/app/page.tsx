export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {[
        { title: "Total Balance", value: "₹2,45,000" },
        { title: "Monthly Income", value: "₹80,000" },
        { title: "Monthly Expense", value: "₹45,000" },
      ].map((card) => (
        <div
          key={card.title}
          className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
        >
          <p className="text-sm text-gray-500">{card.title}</p>
          <h2 className="text-2xl font-semibold mt-2">{card.value}</h2>
        </div>
      ))}

      <div className="col-span-3 mt-8 bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <table className="w-full text-left border-t border-gray-100">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="py-2">Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["09 Nov 2025", "Food", "₹1,200", "Paid"],
              ["08 Nov 2025", "Internet", "₹800", "Paid"],
              ["07 Nov 2025", "Rent", "₹18,000", "Pending"],
            ].map(([date, cat, amt, status]) => (
              <tr key={date} className="border-t hover:bg-gray-50">
                <td className="py-2">{date}</td>
                <td>{cat}</td>
                <td>{amt}</td>
                <td
                  className={`font-medium ${
                    status === "Paid" ? "text-green-600" : "text-orange-500"
                  }`}
                >
                  {status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
