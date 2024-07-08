import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    cakeType: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerDOB: {
      type: Date,
      required: true,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    deliveryDate: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    whatsApp: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
