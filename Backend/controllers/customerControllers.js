// import Customers from "../models/customerModel.js";
// import asyncHandler from "../middleware/asyncHandler.js";

// // Get all customers
// const getCustomers = asyncHandler(async (req, res) => {
//     const customers = await Customers.find({});
//     res.json(customers);
// });

// // Create a new customer
// const createCustomer = asyncHandler(async (req, res) => {
//     const { name, email, phone } = req.body;

//     const customer = new Customers({
//         name,
//         email,
//         phone,
//     });

//     const createdCustomer = await customer.save();
//     res.status(201).json(createdCustomer);
// });

// // Update an existing customer
// const updateCustomer = asyncHandler(async (req, res) => {
//     const { name, email, phone } = req.body;

//     const customer = await Customers.findById(req.params.id);

//     if (customer) {
//         customer.name = name;
//         customer.email = email;
//         customer.phone = phone;

//         const updatedCustomer = await customer.save();
//         res.json(updatedCustomer);
//     } else {
//         res.status(404).json({ message: 'Customer not found' });
//     }
// });

// // Delete a customer
// const deleteCustomer = asyncHandler(async (req, res) => {
//     const customer = await Customers.findById(req.params.id);

//     if (customer) {
//         await customer.remove();
//         res.json({ message: 'Customer removed' });
//     } else {
//         res.status(404).json({ message: 'Customer not found' });
//     }
// });

// export { createCustomer, deleteCustomer, getCustomers, updateCustomer };
