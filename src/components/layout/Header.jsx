const Header = ({ darkMode, setDarkMode, search, setSearch, filter, setFilter }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
      <h2 className="text-lg font-semibold">Hello, Tarun 👋</h2>
      <div className="flex items-center gap-3 flex-wrap">

        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`text-sm px-4 py-2 rounded-lg outline-none w-48 border ${
            darkMode
              ? 'bg-white/5 border-white/10 text-white placeholder:text-white/30'
              : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
          }`}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={`text-sm px-3 py-2 rounded-lg outline-none cursor-pointer border ${
            darkMode
              ? 'bg-white/5 border-white/10 text-white'
              : 'bg-white border-gray-200 text-gray-900'
          }`}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`text-sm px-4 py-2 rounded-lg transition cursor-pointer border ${
            darkMode
              ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'
          }`}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

      </div>
    </div>
  )
}

export default Header