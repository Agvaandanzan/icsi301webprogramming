import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg ">
        <Link to="/" className="navbar-brand ">Үл хөдлөх хөрөнгийн үндэсний төв</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link text-dark">Үл хөдлөх хөрөнгийн жагсаалт</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link text-dark">Үл хөдлөх хөрөнгийн зар оруулах</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link text-dark">Бүртгүүлэх</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}