import React from 'react';
import { format } from 'date-fns';

export default function OrderList({ orders, handleEditOrder, handleDeleteOrder }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {orders.map((order, index) => (
        <div key={order.orderId} className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Order #{order.orderId}</h3>
          <p className="text-sm mb-2">Cake Type: {order.cakeType}</p>
          <p className="text-sm mb-2">Customer Name: {order.customerName}</p>
          <p className="text-sm mb-2">DOB: {format(new Date(order.customerDOB), 'yyyy-MM-dd')}</p>
          <p className="text-sm mb-2">Order Date: {format(new Date(order.orderDate), 'yyyy-MM-dd')}</p>
          <p className="text-sm mb-2">Delivery Date: {format(new Date(order.deliveryDate), 'yyyy-MM-dd')}</p>
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
      ))}
    </div>
  );
}
