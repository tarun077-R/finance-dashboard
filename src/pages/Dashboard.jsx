import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import SummaryCard from "../components/dashboard/SummaryCard";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import TransactionList from "../components/transactions/TransactionList";
import TransactionForm from "../components/transactions/TransactionForm";
import { useState, useEffect } from "react";

const mockTransactions = [
  { id: 1, title: "Salary Credit", amount: 50000, type: "income", category: "Salary", date: "2026-03-25" },
  { id: 2, title: "Netflix", amount: 499, type: "expense", category: "Entertainment", date: "2026-03-24" },
  { id: 3, title: "Grocery Store", amount: 1200, type: "expense", category: "Food", date: "2026-03-22" },
  { id: 4, title: "Freelance Work", amount: 8000, type: "income", category: "Freelance", date: "2026-03-20" },
  { id: 5, title: "Electricity Bill", amount: 800, type: "expense", category: "Utilities", date: "2026-03-18" },
  { id: 6, title: "Amazon Order", amount: 1500, type: "expense", category: "Shopping", date: "2026-03-15" },
  { id: 7, title: "Bonus", amount: 10000, type: "income", category: "Salary", date: "2026-03-10" },
  { id: 8, title: "Petrol", amount: 500, type: "expense", category: "Transport", date: "2026-03-08" },
]

const Dashboard = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions")
    return saved ? JSON.parse(saved) : mockTransactions
  })
  const [darkMode, setDarkMode] = useState(true)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  const addTransaction = (data) => {
    setTransactions([{ ...data, id: Date.now() }, ...transactions])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0)

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0)

  const balance = income - expense

  const filtered = transactions.filter((t) => {
    const matchSearch = t.title ? t.title.toLowerCase().includes(search.toLowerCase()) : true
    const matchFilter = filter === "all" || t.type === filter
    return matchSearch && matchFilter
  })

  const dm = darkMode

  return (
    <div className={`flex min-h-screen ${dm ? 'bg-[#0a0a0a] text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Sidebar darkMode={dm} />
      <div className="flex-1 p-4 md:p-6 overflow-auto">

        <Header
          darkMode={dm}
          setDarkMode={setDarkMode}
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <h1 className="text-xl md:text-2xl font-bold mt-6 mb-6">
          Dashboard Overview
        </h1>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <SummaryCard title="Total Balance" amount={balance} type="balance" darkMode={dm} />
          <SummaryCard title="Total Income" amount={income} type="income" darkMode={dm} />
          <SummaryCard title="Total Expense" amount={expense} type="expense" darkMode={dm} />
        </div>

        {/* CHART + FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className={`lg:col-span-2 border p-5 rounded-2xl ${
            dm ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
          }`}>
            <h3 className={`mb-4 font-semibold text-sm tracking-widest uppercase ${
              dm ? 'text-white/60' : 'text-gray-500'
            }`}>
              Income vs Expense
            </h3>
            <ExpenseChart transactions={transactions} darkMode={dm} />
          </div>
          <div className={`border p-5 rounded-2xl ${
            dm ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
          }`}>
            <TransactionForm addTransaction={addTransaction} darkMode={dm} />
          </div>
        </div>

        {/* TRANSACTIONS */}
        <div className={`border p-5 rounded-2xl ${
          dm ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <h3 className={`mb-4 font-semibold text-sm tracking-widest uppercase ${
            dm ? 'text-white/60' : 'text-gray-500'
          }`}>
            Recent Transactions
          </h3>
          <TransactionList
            transactions={filtered}
            deleteTransaction={deleteTransaction}
            darkMode={dm}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard