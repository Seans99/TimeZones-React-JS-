import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/images/TimeZonesLogo.png";
import { Navbar, Container, Nav, Col } from "../utilities/components-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Col>
            <Navbar.Brand className="head-title" href="/">
              <img className="logo"  src={Logo}  />
              &nbsp;Time Philosophers
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Toggle className="burger" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Link className="head-link" to="/">
                  HOME
                </Link>
                <Link className="head-link" to="/cities">
                  CITIES{" "}
                </Link>
                <Link className="head-link" to="/my-time">
                  MY TIME
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </header>
  );
}
