import axios from 'axios';

const API_URL = 'http://localhost:5001/api/users/order';

export const createOrder = async (order) => {
  const response = await axios.post(API_URL, order);
  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateOrder = async (id, order) => {
  const response = await axios.put(`${API_URL}/${id}`, order);
  return response.data;
};

export const deleteOrder = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
