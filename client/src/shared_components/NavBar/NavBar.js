import React from "react";
import { Link, NavLink } from "react-router-dom";
// react ui components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <NavLink className="navbar-brand" to="/">
          NaPS App 2.0
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
