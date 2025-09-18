import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Customer APP</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 ">
              <li className="nav-item">
                <Link className="nav-link "to="/">Add Customer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/list">View Customer</Link>
              </li>
              </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AddCustomer/>} />
          <Route path="/list" element={<CustomerList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
