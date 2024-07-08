import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function OrderForm({ addOrder, orderToEdit, setOrderToEdit }) {
  const [cakeType, setCakeType] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerDOB, setCustomerDOB] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [address, setAddress] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [orderTotal, setOrderTotal] = useState('');

  useEffect(() => {
    if (orderToEdit) {
      setCakeType(orderToEdit.cakeType);
      setCustomerName(orderToEdit.customerName);
      setCustomerDOB(orderToEdit.customerDOB);
      setOrderDate(orderToEdit.orderDate);
      setDeliveryDate(orderToEdit.deliveryDate);
      setAddress(orderToEdit.address);
      setWhatsApp(orderToEdit.whatsApp);
      setOrderTotal(orderToEdit.total);
    } else {
      resetForm();
    }
  }, [orderToEdit]);

  const resetForm = () => {
    setCakeType('');
    setCustomerName('');
    setCustomerDOB('');
    setOrderDate('');
    setDeliveryDate('');
    setAddress('');
    setWhatsApp('');
    setOrderTotal('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      cakeType,
      customerName,
      customerDOB,
      orderDate,
      deliveryDate,
      address,
      whatsApp,
      total: orderTotal,
    };

    try {
      await addOrder(order);
      resetForm();
      setOrderToEdit(null);
    } catch (error) {
      toast.error('Failed to add/update order');
    }
  };

  return (
    <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-md col-span-full mt-8">
      <h3 className="text-lg font-semibold mb-4">{orderToEdit ? 'Edit Order' : 'Add Order'}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={cakeType}
            onChange={(e) => setCakeType(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            required
          >
            <option value="">Select Cake Type</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Red Velvet">Red Velvet</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Black Forest">Black Forest</option>
          </select>
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            required
          />
          <input
            type="date"
            placeholder="Customer DOB"
            value={customerDOB}
            onChange={(e) => setCustomerDOB(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            required
          />
          <input
            type="date"
            placeholder="Order Date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            required
          />
          <input
            type="date"
            placeholder="Delivery Date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            required
          />
          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            required
          />
          <input
            type="tel"
            placeholder="WhatsApp Number"
            value={whatsApp}
            onChange={(e) => setWhatsApp(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            required
          />
          <input
            type="number"
            placeholder="Total"
            value={orderTotal}
            onChange={(e) => setOrderTotal(e.target.value)}
            className="w-full p-2 bg-gray-700 text-gray-200 rounded-md"
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded-md">
          {orderToEdit ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
}
