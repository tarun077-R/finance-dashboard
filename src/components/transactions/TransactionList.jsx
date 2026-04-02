const categoryEmoji = {
  Salary: "💼", Freelance: "💻", Food: "🍔",
  Entertainment: "🎬", Utilities: "⚡", Shopping: "🛍️",
  Transport: "🚗", Other: "📦"
}

const TransactionList = ({ transactions, deleteTransaction, darkMode }) => {
  if (transactions.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 ${
        darkMode ? 'text-white/20' : 'text-gray-300'
      }`}>
        <span className="text-4xl mb-3">📭</span>
        <p className="text-sm">No transactions found</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {transactions.map((item) => (
        <div
          key={item.id}
          className={`flex items-center gap-4 p-3 rounded-xl transition group ${
            darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'
          }`}
        >
          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg shrink-0 ${
            darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
          }`}>
            {categoryEmoji[item.category] || "📦"}
          </div>

          <div className="flex-1 min-w-0">
            <p className={`text-sm font-semibold truncate ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {item.title}
            </p>
            <p className={`text-xs mt-0.5 ${darkMode ? 'text-white/30' : 'text-gray-400'}`}>
              {item.category} • {item.date}
            </p>
          </div>

          <span className={`text-sm font-bold shrink-0 ${
            item.type === "income" ? "text-green-500" : "text-red-500"
          }`}>
            {item.type === "income" ? "+" : "-"}₹{item.amount.toLocaleString()}
          </span>

          <button
            onClick={() => deleteTransaction(item.id)}
            className="text-red-400 hover:text-red-600 transition opacity-0 group-hover:opacity-100 cursor-pointer bg-transparent border-none text-sm shrink-0"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

export default TransactionList