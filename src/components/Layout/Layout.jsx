import React from "react";

const Layout = ({
  children,
  navbar,
  sidebar,
  className = "",
  contentClassName = "",
  showSidebar = true,
}) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      {navbar && <header className="w-full sticky top-0 z-10">{navbar}</header>}

      <div className="flex flex-1 w-full">
        {showSidebar && sidebar && (
          <aside className="h-[calc(100vh-64px)] sticky top-16">
            {sidebar}
          </aside>
        )}
        <main className={`flex-1 ${contentClassName} bg-gray-100`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
