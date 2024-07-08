import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors
    try {
      const res = await axios.post('http://localhost:5001/api/users', { name, email, password });
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      setSuccess("Registration successful!"); // Display success message
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.message || "An error occurred"); // Handle error and display message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-white mb-4 text-center">Create an Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-300 mt-4 text-center">
          Already have an account? <a href="/login" className="text-green-500">Login</a>
        </p>
      </div>
    </div>
  );
}
