import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import { BsGrid, BsFillGrid3X3GapFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Header = function () {
  const location = useLocation();
  return (
    <Container fluid className="p-0">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          {location.pathname === "/" && <h2 className="mb-4 text-white">Main</h2>}
          {location.pathname === "/tvShows" && <h2 className="mb-4 text-white">TV Shows</h2>}
          <div className="btn-group" role="group">
            <Dropdown className="dropdown ms-4 mt-1" data-bs-theme="dark">
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                className="btn  btn-sm dropdown-toggle rounded-0 my-btn"
                data-bs-toggle="dropdown"
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div>
          <BsGrid className="icons"></BsGrid>
          <BsFillGrid3X3GapFill className="icons"></BsFillGrid3X3GapFill>
        </div>
      </div>
    </Container>
  );
};
export default Header;
