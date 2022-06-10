import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="sticky-top"
    >
      <Container className="">
        <Navbar.Brand href="/#home" className="aboutme">
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          {!location.pathname.includes("single") && (
            <Nav className="me-auto aboutme">
              <Nav.Link href="#AboutMe">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contactMe">Contact Me</Nav.Link>
            </Nav>
          )}
          {location.pathname.includes("single") && (
            <Nav className="me-auto aboutme">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
