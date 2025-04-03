import React from "react";
import { Plus } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white border-r border-gray-200 p-4 h-full">
      <div className="flex items-center space-x-2 text-gray-700 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
        <Plus className="w-5 h-5" />
        <span>Add Course</span>
      </div>
    </aside>
  );
};

export default Sidebar;
