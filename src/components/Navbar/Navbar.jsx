import React from "react";
import { Search, Bell } from "lucide-react";

const NavBar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <a href="/">
            <p className="text-black">Cartedo</p>
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-500" />
          </button>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden"></div>
            <span className="ml-2 text-sm font-medium">Cartedo</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
