import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function EventForm() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [discount, setDiscount] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5001/api/events', {
        eventName,
        eventDate,
        discount,
        greetingMessage,
      });
      toast.success('Event created successfully');
      // Reset form
      setEventName('');
      setEventDate('');
      setDiscount('');
      setGreetingMessage('');
    } catch (error) {
      toast.error('Failed to create event');
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 to-purple-200 min-h-screen flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-purple-600">Create Event</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="eventName" className="block text-sm text-gray-700 dark:text-gray-300">
              Event Name
            </label>
            <input
              id="eventName"
              type="text"
              className="w-full bg-purple-100 dark:bg-purple-700 text-gray-900 dark:text-gray-300 mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="eventDate" className="block text-sm text-gray-700 dark:text-gray-300">
              Event Date
            </label>
            <input
              id="eventDate"
              type="date"
              className="w-full bg-green-100 dark:bg-green-700 text-gray-900 dark:text-gray-300 mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="discount" className="block text-sm text-gray-700 dark:text-gray-300">
              Discount (%)
            </label>
            <input
              id="discount"
              type="number"
              className="w-full bg-yellow-100 dark:bg-yellow-700 text-gray-900 dark:text-gray-300 mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="greetingMessage" className="block text-sm text-gray-700 dark:text-gray-300">
              Greeting Message
            </label>
            <textarea
              id="greetingMessage"
              className="w-full bg-blue-100 dark:bg-blue-700 text-gray-900 dark:text-gray-300 mt-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              value={greetingMessage}
              onChange={(e) => setGreetingMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-150 ease-in-out"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
