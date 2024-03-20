import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/logo.png";
import { BsSearch, BsBell, BsPerson } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = function () {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="md" className="navColo" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" me-auto mb-2 mb-lg-0">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
            <Link to="/tvShows" className={location.pathname === "/tvShows" ? "nav-link active" : "nav-link"}>
              TV Shows
            </Link>
            <Link to="/" className="nav-link fw-bold">
              Movies
            </Link>
            <Link to="/" className="nav-link fw-bold">
              Recently Added
            </Link>
            <Link to="/" className="nav-link fw-bold">
              My List
            </Link>
          </Nav>
          <Nav className="d-flex flex-row align-items-center justify-content-center">
            <BsSearch className="icons"></BsSearch>
            <Link id="kids" className="fw-bold">
              KIDS
            </Link>
            <BsBell className="icons"></BsBell>
            <BsPerson className="icons"></BsPerson>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
