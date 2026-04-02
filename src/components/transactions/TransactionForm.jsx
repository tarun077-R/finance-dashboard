import { useState } from "react"

const categories = ["Salary", "Freelance", "Food", "Entertainment", "Utilities", "Shopping", "Transport", "Other"]

const TransactionForm = ({ addTransaction, darkMode }) => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("income")
  const [category, setCategory] = useState("Salary")
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !amount) return
    addTransaction({ title, amount: Number(amount), type, category, date })
    setTitle("")
    setAmount("")
  }

  const inputClass = `w-full border text-sm px-4 py-2.5 rounded-lg outline-none transition ${
    darkMode
      ? 'bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30'
      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-gray-400'
  }`

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h3 className={`font-semibold text-sm tracking-widest uppercase mb-1 ${
        darkMode ? 'text-white/60' : 'text-gray-500'
      }`}>
        Add Transaction
      </h3>

      <input
        type="text"
        placeholder="Title e.g. Salary"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={inputClass}
      />

      <input
        type="number"
        placeholder="Amount (₹)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={inputClass}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={`w-full border text-sm px-4 py-2.5 rounded-lg outline-none cursor-pointer ${
          darkMode
            ? 'bg-white/5 border-white/10 text-white'
            : 'bg-gray-50 border-gray-200 text-gray-900'
        }`}
      >
        {categories.map((c) => (
          <option key={c} value={c} className={darkMode ? 'bg-[#0a0a0a]' : 'bg-white'}>
            {c}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        {["income", "expense"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition border cursor-pointer ${
              type === t
                ? t === "income"
                  ? "bg-green-500/20 border-green-500/40 text-green-500"
                  : "bg-red-500/20 border-red-500/40 text-red-500"
                : darkMode
                  ? "bg-transparent border-white/10 text-white/40 hover:text-white"
                  : "bg-transparent border-gray-200 text-gray-400 hover:text-gray-900"
            }`}
          >
            {t === "income" ? "Income" : "Expense"}
          </button>
        ))}
      </div>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={inputClass}
      />

      <button
        type="submit"
        className={`font-semibold text-sm py-2.5 rounded-lg transition cursor-pointer border-none mt-1 ${
          darkMode
            ? 'bg-white text-black hover:bg-white/90'
            : 'bg-gray-900 text-white hover:bg-gray-700'
        }`}
      >
        Add Transaction
      </button>
    </form>
  )
}

export default TransactionForm