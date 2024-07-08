// models/customerModel.js
import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Customers = mongoose.model('Customer', customerSchema);

export default Customers;
