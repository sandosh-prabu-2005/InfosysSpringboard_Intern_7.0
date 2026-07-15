import React, { useEffect, useState } from 'react';
import { fetchRequests } from '../api';

function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests()
      .then(data => {
        setRequests(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-black text-gradient">Purchase Requests</h1>
        <p className="text-lg text-muted">View all purchase requests from users.</p>
      </div>

      {loading ? (
        <div className="font-bold text-muted">Loading requests...</div>
      ) : (
        <div className="glass-panel overflow-hidden">
          {requests.length === 0 ? (
            <p className="p-8 text-center font-bold text-muted">No purchase requests found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-ink bg-highlight">
                    <th className="p-4 font-black uppercase text-ink">ID</th>
                    <th className="p-4 font-black uppercase text-ink">Amount</th>
                    <th className="p-4 font-black uppercase text-ink">Date</th>
                    <th className="p-4 font-black uppercase text-ink">User</th>
                    <th className="p-4 font-black uppercase text-ink">Supplier</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map(req => (
                    <tr key={req.id} className="border-b-2 border-line bg-white transition-colors hover:bg-paper">
                      <td className="p-4 font-bold text-ink">#{req.id}</td>
                      <td className="p-4 font-black text-ink">${req.amount.toFixed(2)}</td>
                      <td className="p-4 text-muted">{req.created}</td>
                      <td className="p-4 font-bold text-ink">{req.user.name}</td>
                      <td className="p-4 font-bold text-ink">{req.supplier.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RequestsPage;
