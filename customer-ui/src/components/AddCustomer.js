import { toast } from "react-toastify";
import CustomerService from "../services/CustomerService";
import React, { useState } from "react";

function AddCustomer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill all the fields");
      return;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    CustomerService.create(form)
      .then(() => {
        toast.success("Customer added successfully");
        setForm({ name: "", email: "", phone: "" }); // reset form
      })
      .catch(() => {
        toast.error("Error adding customer");
      });
  };

  return (
    <div className="card shadow p-4">
      <h3 className="mb-4 text-primary">Add New Customer</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="form-floating mb-4">
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone Number</label>
        </div>

        <button type="submit" className="btn btn-primary float-end mt-3">
          Add Customer
        </button>
      </form>
    </div>
  );
}

export default AddCustomer;
