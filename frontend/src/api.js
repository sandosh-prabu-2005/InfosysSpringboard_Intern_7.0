const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchItems() {
  const response = await fetch(`${API_BASE_URL}/items`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
}

export async function fetchRequests() {
  const response = await fetch(`${API_BASE_URL}/requests`);
  if (!response.ok) {
    throw new Error('Failed to fetch requests');
  }
  return response.json();
}

export async function fetchSuppliers() {
  const response = await fetch(`${API_BASE_URL}/suppliers`);
  if (!response.ok) {
    throw new Error('Failed to fetch suppliers');
  }
  return response.json();
}

export async function createItem(item) {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  if (!response.ok) {
    throw new Error('Failed to create item');
  }
  return response.json();
}
