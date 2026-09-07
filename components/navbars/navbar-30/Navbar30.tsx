import { LayoutGrid, BarChart3, Box, Users, Settings, LogOut, Search } from "lucide-react";

export default function Navbar30() {
  const menuItems = [
    { label: "Dashboard", icon: <LayoutGrid size={22} />, active: true },
    { label: "Analytics", icon: <BarChart3 size={22} /> },
    { label: "Products", icon: <Box size={22} /> },
    { label: "Customers", icon: <Users size={22} /> },
    { label: "Settings", icon: <Settings size={22} /> },
  ];

  return (
    <div className="flex w-full bg-[#f8fafc] p-8 min-h-[650px] justify-center items-start">
      {/* Sidebar Container */}
      <aside className="w-[280px] bg-[#0f172a] rounded-[2.5rem] p-8 flex flex-col shadow-2xl shadow-blue-900/20">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-12 px-2 text-white">
          <div className="h-10 w-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
            <Box size={24} fill="white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">ZENITH</span>
        </div>

        {/* Search Bar - Sidebar Style */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${
                item.active 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className={item.active ? "text-white" : "text-gray-500 group-hover:text-white transition-colors"}>
                {item.icon}
              </span>
              <span className="font-semibold tracking-wide">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* User Profile / Logout Section */}
        <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-4 px-2">
          <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-600 border-2 border-white/10" />
          <div className="flex-1 overflow-hidden">
            <p className="text-white font-bold text-sm truncate">Alex Morgan</p>
            <p className="text-gray-500 text-xs truncate">Admin Account</p>
          </div>
          <button className="text-gray-500 hover:text-red-400 transition-colors">
            <LogOut size={20} />
          </button>
        </div>

      </aside>
    </div>
  );
}