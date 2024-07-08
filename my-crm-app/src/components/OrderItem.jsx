// OrderItem.js
import React from 'react';

export default function OrderItem({ order, index, handleEditOrder, handleDeleteOrder }) {
  return (
    <div key={order.id} className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Order #{order.id}</h3>
      <p className="text-sm mb-2">Cake Type: {order.cakeType}</p>
      <p className="text-sm mb-2">Customer Name: {order.customerName}</p>
      <p className="text-sm mb-2">DOB: {order.customerDOB}</p>
      <p className="text-sm mb-2">Order Date: {order.orderDate}</p>
      <p className="text-sm mb-2">Delivery Date: {order.deliveryDate}</p>
      <p className="text-sm mb-2">Address: {order.address}</p>
      <p className="text-sm mb-2">WhatsApp: {order.whatsApp}</p>
      <p className="text-sm mb-2">Total: ${order.total}</p>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => handleEditOrder(index)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteOrder(index)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
