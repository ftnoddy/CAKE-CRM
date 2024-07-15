import React, { useState, useEffect } from 'react';
import OrderForm from './OrderForm';
import OrderList from './OrderList';
import { createOrder, getOrders, updateOrder, deleteOrder } from './api';
import { toast } from 'react-toastify';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [orderToEdit, setOrderToEdit] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      toast.error('Failed to fetch orders');
    }
  };

  const handleAddOrder = async (order) => {
    try {
      if (orderToEdit) {
        const updatedOrder = await updateOrder(orderToEdit._id, order);
        setOrders(
          orders.map((o) => (o._id === updatedOrder._id ? updatedOrder : o))
        );
        toast.success('Order updated successfully!');
        setOrderToEdit(null);
      } else {
        const newOrder = await createOrder(order);
        setOrders([...orders, newOrder]);
        toast.success('Order created successfully!');
      }
    } catch (error) {
      toast.error('Failed to add/update order');
    }
  };

  const handleEditOrder = (index) => {
    setOrderToEdit(orders[index]);
  };

  const handleDeleteOrder = async (index) => {
    try {
      const orderId = orders[index]._id;
      await deleteOrder(orderId);
      setOrders(orders.filter((_, i) => i !== index));
      toast.success('Order deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete order');
    }
  };

  return (
    <section className="bg-gray-900 text-gray-200 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Customer Orders</h2>
      <div className="fixed w-full top-0 left-0 bg-gray-900 p-4 z-10">
        <OrderForm
          addOrder={handleAddOrder}
          orderToEdit={orderToEdit}
          setOrderToEdit={setOrderToEdit}
        />
      </div>
      <div className="mt-24"> {/* Add top margin to provide space for the fixed form */}
        <OrderList
          orders={orders}
          handleEditOrder={handleEditOrder}
          handleDeleteOrder={handleDeleteOrder}
        />
      </div>
    </section>
  );
}
