import React, { useEffect, useState } from 'react';
import { fetchSuppliers } from '../api';

function SuppliersPage() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSuppliers()
      .then(data => {
        setSuppliers(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-black text-gradient">Suppliers</h1>
        <p className="text-lg text-muted">Manage your registered suppliers.</p>
      </div>

      {loading ? (
        <div className="font-bold text-muted">Loading suppliers...</div>
      ) : (
        <div className="mt-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suppliers.map(sup => (
              <li key={sup.id} className="glass-card p-6 flex justify-between items-center">
                <span className="text-lg font-bold text-ink">{sup.name}</span>
                <span className="minimal-badge">{sup.category}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SuppliersPage;
