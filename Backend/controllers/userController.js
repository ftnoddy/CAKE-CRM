import User from "../models/userModel.js";
import Customers from "../models/customerModel.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";
// import sendWhatsAppMessage from "../utils/wpService.js";
import { v4 as uuidv4 } from 'uuid';
// import client from "../utils/wpService.js";


// Signup
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  user = new User({
    name,
    email,
    password,
  });

  await user.save();

  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token,
    isAdmin: user.isAdmin,
  });
});

// Login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});



// @route   POST/ api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// Get all customers
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customers.find({});
  res.json(customers);
});

// Create a new customer
const createCustomer = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  const customer = new Customers({
    name,
    email,
    phone,
  });

  const createdCustomer = await customer.save();
  res.status(201).json(createdCustomer);
});

// Update an existing customer
const updateCustomer = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  const customer = await Customers.findById(req.params.id);

  if (customer) {
    customer.name = name;
    customer.email = email;
    customer.phone = phone;

    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Delete a customer
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customers.findById(req.params.id);

  if (customer) {
    await customer.deleteOne();
    res.json({ message: "Customer removed" });
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
});

// Create order and send WhatsApp message
const createOrder = asyncHandler(async (req, res) => {
  const {
    cakeType,
    customerName,
    customerDOB,
    orderDate,
    deliveryDate,
    address,
    whatsApp,
    total,
  } = req.body;

  const order = new Order({
    orderId: uuidv4(), // Generate unique order ID
    cakeType,
    customerName,
    customerDOB,
    orderDate,
    deliveryDate,
    address,
    whatsApp,
    total,
  });

  const createdOrder = await order.save();

  // Send WhatsApp message to the customer
  // const message = `Hi ${customerName}, your order for ${cakeType} cake has been confirmed. We will deliver it on ${deliveryDate}. Thank you!`;
  // try {
  //   await sendWhatsAppMessage(whatsApp, message);
  //   console.log('WhatsApp message sent successfully');
  // } catch (error) {
  //   console.error('Error sending WhatsApp message:', error);
  //   // Optionally, you can handle the error more gracefully, e.g., log it, notify an admin, etc.
  // }

  res.status(201).json(createdOrder);
});

//get orders
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

const updateOrder = asyncHandler(async (req, res) => {
  const { cakeType, customerName, customerDOB, orderDate, deliveryDate, address, whatsApp, total } = req.body;
  const order = await Order.findById(req.params.id);

  if (order) {
    order.cakeType = cakeType;
    order.customerName = customerName;
    order.customerDOB = customerDOB;
    order.orderDate = orderDate;
    order.deliveryDate = deliveryDate;
    order.address = address;
    order.whatsApp = whatsApp;
    order.total = total;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    await order.deleteOne();
    res.json({ message: "Order removed" });
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

export {
  registerUser,
  loginUser,
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  logoutUser,
};
