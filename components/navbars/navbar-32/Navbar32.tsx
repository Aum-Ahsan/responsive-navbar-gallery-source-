import { Home, Search, PlusSquare, Heart, User } from "lucide-react";

export default function Navbar32() {
  const navItems = [
    { icon: <Home size={24} />, label: "Home", active: true },
    { icon: <Search size={24} />, label: "Explore" },
    { icon: <PlusSquare size={28} className="text-blue-500" />, label: "Create" },
    { icon: <Heart size={24} />, label: "Alerts" },
    { icon: <User size={24} />, label: "Profile" },
  ];

  return (
    <div className="flex w-full items-center justify-center bg-gray-50 p-10 min-h-[400px]">
      {/* Mobile Frame Simulation */}
      <div className="relative h-[600px] w-[320px] bg-white border-[8px] border-gray-900 rounded-[3rem] overflow-hidden shadow-2xl">
        
        {/* Page Content Placeholder */}
        <div className="p-6">
          <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
          <div className="h-40 w-full bg-gray-100 rounded-2xl mb-4" />
          <div className="space-y-3">
            <div className="h-3 w-full bg-gray-50 rounded" />
            <div className="h-3 w-3/4 bg-gray-50 rounded" />
          </div>
        </div>

        {/* BOTTOM NAVIGATION BAR */}
        <nav className="absolute bottom-0 w-full bg-white/80 backdrop-blur-lg border-t border-gray-100 px-4 py-3 pb-6 flex items-center justify-between">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 transition-all ${
                item.active ? "text-blue-600 scale-110" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {item.icon}
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

      </div>
    </div>
  );
}