import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api';
import './ItemList.css';

function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems()
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading items...</div>;

  return (
    <div className="item-container">
      <h2>Available Items</h2>
      <ul className="item-list">
        {items.map(item => (
          <li key={item.id} className="item-card">
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
