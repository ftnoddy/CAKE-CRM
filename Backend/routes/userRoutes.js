import express from "express";
const router = express.Router();

import {
  registerUser,
  loginUser,
  logoutUser,
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/userController.js";

// Customer Routes
router.route("/customer").get(getCustomers).post(createCustomer);
router.route("/customer/:id").put(updateCustomer).delete(deleteCustomer);

// User Authentication Routes
router.post("/", registerUser);
router.post("/login", loginUser);
router.post('/logout', logoutUser);

// Order Routes
router.route("/order").post(createOrder).get(getOrders);
router.route("/order/:id").get(getOrderById).put(updateOrder).delete(deleteOrder);

export default router;
