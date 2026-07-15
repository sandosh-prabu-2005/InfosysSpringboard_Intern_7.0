import React, { useEffect, useState } from 'react';
import { fetchItems, fetchRequests, fetchSuppliers } from '../api';

function Dashboard() {
  const [stats, setStats] = useState({ items: 0, requests: 0, suppliers: 0 });

  useEffect(() => {
    Promise.all([fetchItems(), fetchRequests(), fetchSuppliers()])
      .then(([items, requests, suppliers]) => {
        setStats({
          items: items.length,
          requests: requests.length,
          suppliers: suppliers.length
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-black text-gradient">Dashboard</h1>
        <p className="text-lg text-muted">Overview of your procurement system.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="glass-card p-8">
          <h3 className="mb-4 text-lg font-bold uppercase text-muted">Total Items</h3>
          <div className="text-5xl font-black text-ink">{stats.items}</div>
        </div>
        <div className="glass-card p-8">
          <h3 className="mb-4 text-lg font-bold uppercase text-muted">Active Requests</h3>
          <div className="text-5xl font-black text-ink">{stats.requests}</div>
        </div>
        <div className="glass-card p-8">
          <h3 className="mb-4 text-lg font-bold uppercase text-muted">Registered Suppliers</h3>
          <div className="text-5xl font-black text-ink">{stats.suppliers}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
