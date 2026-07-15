import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="relative z-0 ml-64 flex-1 p-8 lg:p-12">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
