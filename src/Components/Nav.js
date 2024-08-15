// NavBar.js
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "reactstrap";
import img from "../Images/swiftwingslogo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = {
    marginLeft: '15px',
    marginRight: '15px',
    color: '#FFFFFF', // Changed to white for visibility on the background image
  };

  const buttonStyle = {
    backgroundColor: '#5C0632',
    borderColor: '#5C0632',
    borderRadius: '50px',
    marginLeft: '10px',
  };

  const centerNavStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  };

  const toggleButtonStyle = {
    border: '1px solid #ffffff',
    backgroundColor: 'transparent',
  };

  const toggleIconStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <Navbar 
      expand="lg" 
      className="navbar-dark" 
      style={{
        position: 'absolute',
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'transparent'
      }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#FF7223' }}>
          <img src={img} alt="Swift Wings Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={toggleButtonStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon" style={toggleIconStyle}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
          <Nav style={centerNavStyle}>
            <Nav.Link href="#services" style={navLinkStyle}>Home</Nav.Link>
            <Nav.Link href="#portfolio" style={navLinkStyle}>About</Nav.Link>
            <Nav.Link href="#contact" style={navLinkStyle}>Features</Nav.Link>
            <Nav.Link href="#faq" style={navLinkStyle}>Benefits</Nav.Link>
          </Nav>
          
          <Button className="btn-rounded-pill" style={buttonStyle}>Connect Wallet</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;