import Link from "next/link";
import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar as NavbarBs,
  NavLink,
} from "react-bootstrap";

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Link href="/" passHref>
          <NavbarBs.Brand href="/">Weather</NavbarBs.Brand>
        </Link>
        <NavbarBs.Toggle aria-controls="responsive-navbar-nav" />

        <Nav className="me-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/post/postlist" passHref>
            <Nav.Link>Post</Nav.Link>
          </Link>
          <Link href="/weather/citylist" passHref>
            <Nav.Link>City List</Nav.Link>
          </Link>
          <Link href="/weather/citysearch" passHref>
            <Nav.Link>Search weather</Nav.Link>
          </Link>
          <Link href="/todos" passHref>
            <Nav.Link>Todos</Nav.Link>
          </Link>
        </Nav>
        <Button variant="outline-primary" className="rounded">
          Cart
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center">{``}</div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
