const Sidebar = ({ darkMode }) => {
  return (
    <div className={`hidden md:flex w-56 border-r p-5 flex-col gap-6 ${
      darkMode ? 'bg-white/3 border-white/10' : 'bg-white border-gray-200'
    }`}>
      <div>
        <h2 className={`font-black text-lg tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          FIN<span className={darkMode ? 'text-white/30' : 'text-gray-400'}>FLOW</span>
        </h2>
        <p className={`text-xs mt-1 ${darkMode ? 'text-white/30' : 'text-gray-400'}`}>
          Finance Dashboard
        </p>
      </div>

      <ul className="flex flex-col gap-1">
        {[
          { label: "Dashboard", active: true },
          { label: "Transactions", active: false },
          { label: "Analytics", active: false },
          { label: "Budgets", active: false },
          { label: "Settings", active: false },
        ].map((item) => (
          <li
            key={item.label}
            className={`px-3 py-2 rounded-lg text-sm cursor-pointer transition-all ${
              item.active
                ? darkMode
                  ? 'bg-white text-black font-semibold'
                  : 'bg-gray-900 text-white font-semibold'
                : darkMode
                  ? 'text-white/50 hover:text-white hover:bg-white/5'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className={`flex items-center gap-3 rounded-xl p-3 border ${
          darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            darkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'
          }`}>T</div>
          <div>
            <p className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Tarun Rawat
            </p>
            <p className={`text-xs ${darkMode ? 'text-white/30' : 'text-gray-400'}`}>Admin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar