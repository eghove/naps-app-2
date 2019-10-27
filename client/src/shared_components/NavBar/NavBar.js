import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignOutButton from '../SignOut/SignOut'




function NavBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/">NaPS App 2.0</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link><SignOutButton /></Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

const Navigation = ({ authUser }) => (
  <div>
    {authUser ? <NavBarAuth /> : <NavBarNonAuth />}
  </div>
)

function NavBarAuth() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/">NaPS App 2.0</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link><SignOutButton /></Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
};

function NavBarNonAuth() {
  return (
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand href="/">NaPS App 2.0</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signin">Sign In</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}


export default NavBar;