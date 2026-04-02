import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, Legend
} from "recharts"

const ExpenseChart = ({ transactions, darkMode }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const data = months.map((month, i) => {
    const monthTxns = transactions.filter((t) => {
      const d = new Date(t.date)
      return d.getMonth() === i
    })
    return {
      month,
      Income: monthTxns.filter((t) => t.type === "income").reduce((a, c) => a + c.amount, 0),
      Expense: monthTxns.filter((t) => t.type === "expense").reduce((a, c) => a + c.amount, 0),
    }
  }).filter((d) => d.Income > 0 || d.Expense > 0)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`border rounded-xl px-4 py-3 text-sm ${
          darkMode
            ? 'bg-[#0a0a0a] border-white/10 text-white'
            : 'bg-white border-gray-200 text-gray-900'
        }`}>
          <p className={`mb-2 ${darkMode ? 'text-white/60' : 'text-gray-500'}`}>{label}</p>
          {payload.map((p) => (
            <p key={p.name} style={{ color: p.color }}>
              {p.name}: ₹{p.value.toLocaleString()}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const tickColor = darkMode ? "rgba(255,255,255,0.4)" : "#9ca3af"
  const gridColor = darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)"

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} barCategoryGap="30%">
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis
          dataKey="month"
          tick={{ fill: tickColor, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: tickColor, fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)" }} />
        <Legend wrapperStyle={{ color: darkMode ? "rgba(255,255,255,0.5)" : "#6b7280", fontSize: 12 }} />
        <Bar dataKey="Income" fill="#22c55e" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Expense" fill="#ef4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ExpenseChart