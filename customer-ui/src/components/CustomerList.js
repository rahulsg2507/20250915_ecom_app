// src/components/CustomerList.js
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomerService from "../services/CustomerService";

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const data = await CustomerService.getAll();
      setCustomers(data); // always an array now
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("Error fetching customers");
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    if (!id) return;
    try {
      const res = await CustomerService.remove(id);
      if (res.status === 200 || res.status === 204) {
        toast.success("Customer deleted successfully");
        fetchCustomers();
      } else {
        toast.error("Failed to delete customer");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Error deleting customer");
    }
  };

  return (
    <div className="card shadow p-4">
      <h3 className="mb-4 text-primary">Customer List</h3>
      {!customers || customers.length === 0 ? (
        <div className="alert alert-info">No customers found</div>
      ) : (
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, index) => (
              <tr key={c.id || index}>
                <td>{index + 1}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(c.id)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CustomerList;
