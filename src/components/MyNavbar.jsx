import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";
import { BsSearch, BsBell, BsPerson } from "react-icons/bs";

const MyNavbar = function () {
  return (
    <Navbar
      className="navbar navbar-expand-lg navColo"
      data-bs-theme="dark"
      //   style="background-color: #221f1f !important"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="nav-link fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <BsSearch className="icons"></BsSearch>
            <Nav.Link id="kids" className="fw-bold">
              KIDS
            </Nav.Link>
            <BsBell className="icons"></BsBell>
            <BsPerson className="icons"></BsPerson>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
