import { Moon, Sun, Search, Bell, Settings, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function TopBar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between px-4 md:px-8 h-16 w-full bg-white dark:bg-[#23272F] text-[#232e3e] dark:text-gray-200 border-b border-[#e5e7eb] dark:border-[#20242F]">
      <div className="flex items-center space-x-4">
        <span>Dashboards / <span className="font-semibold">Default</span></span>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center w-full md:w-80 bg-gray-100 dark:bg-[#303340] rounded-md px-3 py-2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input className="bg-transparent flex-1 outline-none text-sm dark:text-white" placeholder="Search"/>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#303340] transition"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark"
            ? <Moon className="w-5 h-5 text-gray-500" />
            : <Sun className="w-5 h-5 text-gray-500" />}
        </button>
        <Settings className="w-5 h-5" />
        <Bell className="w-5 h-5" />
        <User className="w-5 h-5" />
      </div>
    </header>
  );
}
