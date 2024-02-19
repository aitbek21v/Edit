import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>JS3</h1>
          <nav>
            <Link to="/">
            
            <a href="#">Home</a>
            </Link>
            <a href="#">Order</a>
            <Link to="/admin">
            
            <a href="#">Admin</a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
