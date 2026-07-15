import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ItemsPage from './pages/ItemsPage';
import RequestsPage from './pages/RequestsPage';
import SuppliersPage from './pages/SuppliersPage';
import Background3D from './components/Background3D';

function App() {
  return (
    <BrowserRouter>
      <Background3D />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="items" element={<ItemsPage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="suppliers" element={<SuppliersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
