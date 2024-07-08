// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crm from './components/crm';
import Customer from './components/customar';
import Orders from './components/orders';
import Reports from './components/reports';
import Home from './components/crmHome';
import Login from './components/Modals/login';
import Signup from './components/Modals/signup';
import Profile from './components/profile';
import { AuthContextProvider } from './context/authContext';
import AdminRoute from './AdminRoute';
import EventForm from './components/EventForm';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="flex min-h-screen bg-background text-primary-foreground">
          <Crm />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/customer"
                element={
                  <AdminRoute>
                    <Customer />
                  </AdminRoute>
                }
              />
              <Route
                path="/orders"
                element={
                  <AdminRoute>
                    <Orders />
                  </AdminRoute>
                }
              />
              <Route
                path="/reports"
                element={
                  <AdminRoute>
                    <Reports />
                  </AdminRoute>
                }
              />

<Route
                path="/events"
                element={
                  <AdminRoute>
                    <EventForm />
                  </AdminRoute>
                }
              />

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
