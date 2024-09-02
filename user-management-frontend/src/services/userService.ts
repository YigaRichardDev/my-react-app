import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Fetch all users
export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Fetch a user by ID
export const getUserById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Add a new user
export const addUser = async (user: { name: string; email: string; phone: string }) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

// Update an existing user
export const updateUser = async (id: string, user: { name: string; email: string; phone: string }) => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

// Delete a user
export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
