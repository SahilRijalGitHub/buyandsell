import { useState } from "react";
import "../styles/TopBar.css";
import { Link } from "react-router-dom";

function TopBar() {
  function submitForm(e: any) {
    e.preventDefault();
    setSearchText("");
  }
  let [searchText, setSearchText] = useState("");
  return (
    <nav className="navbar navbar-expand-lg" id="top-bar-nav-bar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Buy&Sell
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0" id="home-aboutus-area">
            <li className="nav-item-first">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item-first">
              <Link className="nav-link active" to="#">
                About Us
              </Link>
            </li>
            <li className="nav-item-first">
              <Link className="nav-link active" aria-current="page" to="#">
                help
              </Link>
            </li>
          </ul>
          <form
            className="d-flex"
            role="search"
            id="search-bar"
            onSubmit={submitForm}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0" id="sign-in-dropdown">
            <li className="nav-item-first dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="sign-in"
              >
                Sign In
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Log In
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Register
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item-first">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/basket"
              >
                Basket
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default TopBar;
