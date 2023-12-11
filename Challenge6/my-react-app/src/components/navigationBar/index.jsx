import "../../styles/style.css";
import logo from "../../assets/IMG/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <nav className="nav-menu navbar-expand-lg navbar-expand-md navbar-expand-xl d-flex flex-row justify-content-between">
          <div className="d-flex flex-grow-1">
            <Link  to ="/"> <img src={logo} alt="logo" /></Link>
          </div>

          <div>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvasLg"
              aria-controls="navbarOffcanvasLg"
            >
              <i className="bi bi-list"></i>
            </button>
          </div>

          <div
            className="navbar-nav d-flex justify-content-end offcanvas offcanvas-end"
            tabIndex="-1"
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
          >
            <div className="offcanvas-header">
              <a href="index.html" className="text">
                <h2 className="textBrand">BCR</h2>
              </a>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>

            <div className="offcanvas-body">
              <a className="nav-link" href="#section1">
                Our Services
              </a>
              <a className="nav-link" href="#section2">
                Why Us
              </a>
              <a className="nav-link" href="#section3">
                Testimonial
              </a>
              <a className="nav-link" href="#section5">
                FAQ
              </a>
              <a href="index.html" className="text">
                <button type="button" className="btn btn-success">
                  Register
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* .nav-menu */}
    </header>
  );
}

export default NavigationBar;
