const SummaryCard = ({ title, amount, type, darkMode }) => {
  const config = {
    balance: {
      border: darkMode ? 'border-white/20' : 'border-gray-200',
      text: darkMode ? 'text-white' : 'text-gray-900',
      label: darkMode ? 'text-white/60' : 'text-gray-500',
      bg: darkMode ? 'bg-white/5' : 'bg-white',
    },
    income: {
      border: darkMode ? 'border-green-500/30' : 'border-green-200',
      text: 'text-green-500',
      label: darkMode ? 'text-green-400/60' : 'text-green-600',
      bg: darkMode ? 'bg-white/5' : 'bg-white',
    },
    expense: {
      border: darkMode ? 'border-red-500/30' : 'border-red-200',
      text: 'text-red-500',
      label: darkMode ? 'text-red-400/60' : 'text-red-600',
      bg: darkMode ? 'bg-white/5' : 'bg-white',
    },
  }

  const c = config[type]

  return (
    <div className={`${c.bg} border ${c.border} rounded-2xl p-5 hover:scale-[1.02] transition-all shadow-sm`}>
      <p className={`text-xs font-semibold tracking-widest uppercase ${c.label}`}>
        {title}
      </p>
      <h2 className={`text-2xl font-black mt-2 ${c.text}`}>
        ₹{amount.toLocaleString()}
      </h2>
    </div>
  )
}

export default SummaryCard