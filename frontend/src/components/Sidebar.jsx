import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Truck } from 'lucide-react';

function Sidebar() {
  const linkClass = ({ isActive }) => 
    `flex items-center gap-4 border-2 px-4 py-3 font-bold transition-all duration-150 ${
      isActive 
        ? 'border-ink bg-accent text-ink shadow-[5px_5px_0_#111111]' 
        : 'border-transparent text-muted hover:border-ink hover:bg-white hover:text-ink'
    }`;

  return (
    <aside className="fixed left-0 top-0 z-10 flex h-screen w-64 flex-col border-r-2 border-ink bg-white">
      <div className="border-b-2 border-ink p-8 text-center">
        <h2 className="m-0 text-2xl font-black uppercase tracking-normal text-ink">ProcurePro</h2>
      </div>
      <nav className="p-6 flex flex-col gap-2">
        <NavLink to="/" className={linkClass} end>
          <LayoutDashboard size={20} />
          <span className="font-medium">Dashboard</span>
        </NavLink>
        <NavLink to="/items" className={linkClass}>
          <Package size={20} />
          <span className="font-medium">Items</span>
        </NavLink>
        <NavLink to="/requests" className={linkClass}>
          <ShoppingCart size={20} />
          <span className="font-medium">Requests</span>
        </NavLink>
        <NavLink to="/suppliers" className={linkClass}>
          <Truck size={20} />
          <span className="font-medium">Suppliers</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
