import { Star, Bookmark, Sun, Moon, Search, Bell, Settings, User } from "lucide-react";
import { useState } from "react";

export default function TopBar() {
  const [dark, setDark] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 h-16 w-full bg-white border-b border-gray-200">
      {/* Left - breadcrumb and title */}
      <div className="flex items-center space-x-4">
        <Star className="w-5 h-5 text-gray-400" />
        <Bookmark className="w-5 h-5 text-gray-400" />
        <span className="text-gray-400 text-sm">Dashboards</span>
        <span className="text-gray-400">/</span>
        <span className="font-semibold text-gray-700">Default</span>
      </div>
      {/* Center - Rectangle Search */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center w-80 bg-gray-100 rounded-md px-3 py-2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            className="bg-transparent flex-1 outline-none text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      {/* Right - D/L Mode, icons, user */}
      <div className="flex items-center space-x-3">
        <button
          aria-label="Toggle theme"
          className="p-2 rounded-full hover:bg-gray-100 transition"
          onClick={() => setDark((v) => !v)}
        >
          {dark ? <Moon className="w-5 h-5 text-gray-500" /> : <Sun className="w-5 h-5 text-gray-500" />}
        </button>
        <Settings className="w-5 h-5 text-gray-500" />
        <Bell className="w-5 h-5 text-gray-500" />
        <User className="w-5 h-5 text-gray-500" />
      </div>
    </header>
  );
}
