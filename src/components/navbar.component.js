import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">PoriruaComplaintTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Complaints</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Complaints</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create Kit</Link>
          </li>
        </ul>
        </div>
        <h6 style={{color:'red'}}>Shosha</h6>
      </nav>
    );
  }
}