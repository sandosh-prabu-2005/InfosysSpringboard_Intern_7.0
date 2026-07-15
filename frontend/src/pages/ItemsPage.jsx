import React, { useEffect, useState } from 'react';
import { fetchItems, createItem } from '../api';

function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = () => {
    fetchItems()
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(console.error);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createItem({
        name: newItem.name,
        price: parseFloat(newItem.price)
      });
      setNewItem({ name: '', price: '' });
      loadItems(); // reload the list
    } catch (err) {
      console.error(err);
      alert('Failed to create item');
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-black text-gradient">Items</h1>
        <p className="text-lg text-muted">Manage the inventory of purchasable items.</p>
      </div>

      <div className="glass-panel p-8 mb-8">
        <h2 className="mb-6 text-2xl font-black text-ink">Add New Item</h2>
        <form onSubmit={handleCreate} className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <label className="text-sm font-bold uppercase text-muted">Item Name</label>
            <input 
              type="text" 
              value={newItem.name} 
              onChange={e => setNewItem({...newItem, name: e.target.value})} 
              required 
              placeholder="e.g. Keyboard"
              className="minimal-input"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <label className="text-sm font-bold uppercase text-muted">Price ($)</label>
            <input 
              type="number" 
              step="0.01" 
              value={newItem.price} 
              onChange={e => setNewItem({...newItem, price: e.target.value})} 
              required 
              placeholder="0.00"
              className="minimal-input"
            />
          </div>
          <button type="submit" className="brutal-button">
            Add Item
          </button>
        </form>
      </div>

      {loading ? (
        <div className="font-bold text-muted">Loading items...</div>
      ) : (
        <div className="mt-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(item => (
              <li key={item.id} className="glass-card p-6 flex justify-between items-center">
                <span className="text-lg font-bold text-ink">{item.name}</span>
                <span className="font-black text-ink">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ItemsPage;
