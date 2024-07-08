import React from 'react';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

export default function Home() {
  // Dummy data for total customers, orders, new customers, and top cake orders
  const totalCustomers = 50;
  const totalOrders = 100;
  const newCustomers = 10;

  const topCakeOrders = [
    { cake: 'Chocolate Cake', customer: 'John Doe', price: '$20', phone: '123-456-7890' },
    { cake: 'Vanilla Cake', customer: 'Jane Smith', price: '$25', phone: '987-654-3210' },
    { cake: 'Red Velvet Cake', customer: 'Alice Johnson', price: '$30', phone: '456-789-0123' },
  ];

  // Dummy data for line chart
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Orders',
        data: [12, 19, 3, 5, 2, 3, 9, 12, 15, 8, 6, 4],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Customers',
        data: [10, 15, 2, 4, 1, 2, 7, 10, 13, 6, 5, 3],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  // Dummy data for pie chart
  const pieChartData = {
    labels: ['Chocolate Cake', 'Vanilla Cake', 'Red Velvet Cake'],
    datasets: [
      {
        data: [10, 15, 20],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <header className="bg-gray-800 p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-400">CRM Dashboard</h1>
      </header>
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-400">Total Customers</h2>
            <p className="text-5xl font-bold text-yellow-400">{totalCustomers}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-400">Total Orders</h2>
            <p className="text-5xl font-bold text-yellow-400">{totalOrders}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-400">New Customers</h2>
            <p className="text-5xl font-bold text-yellow-400">{newCustomers}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-3 h-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-400">Top Cake Orders</h2>
            <ul className="text-lg space-y-4">
              {topCakeOrders.map((order, index) => (
                <li key={index} className="flex justify-between items-center p-4 border border-gray-700 rounded-lg">
                  <div className="text-pink-400"><strong>Cake:</strong> {order.cake}</div>
                  <div className="text-blue-400"><strong>Customer:</strong> {order.customer}</div>
                  <div className="text-green-400"><strong>Price:</strong> {order.price}</div>
                  <div className="text-yellow-400"><strong>Phone:</strong> {order.phone}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-red-400">Order & Customer Statistics</h2>
            <Line data={lineChartData} options={{
              responsive: true,
              plugins: { legend: { position: 'top' }, title: { display: true, text: 'Orders and Customers Over Time' } }
            }}/>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-400">Cake Order Distribution</h2>
            <Pie data={pieChartData} options={{
              responsive: true,
              plugins: { legend: { position: 'top' }, title: { display: true, text: 'Cake Order Distribution' } }
            }}/>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 p-4 text-center">
        <Link to="/customer" className="text-blue-500 hover:text-blue-400 mx-4">Manage Customers</Link>
        <Link to="/orders" className="text-blue-500 hover:text-blue-400 mx-4">Manage Orders</Link>
        <Link to="/reports" className="text-blue-500 hover:text-blue-400 mx-4">View Reports</Link>
      </footer>
    </div>
  );
}
