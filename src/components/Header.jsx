import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    // console.log("setIsButtonClicked clicked")
    if (isButtonClicked) {
      setIsButtonClicked(false);
    } else {
      setIsButtonClicked(true);
    }
  };

  const isToggleOff=()=>{
setIsButtonClicked(!isButtonClicked)
  }

  return (
    <>
      <div id="responsive-headerdrop">
        {isButtonClicked && (
          <div className="nav-item dropdown">
            <div className="row m-1">
              <Link  onClick={isToggleOff} className="m-2 responsive-item" to="/">
                Home
              </Link>
              <Link onClick={isToggleOff} className="m-2 responsive-item" to="/businessareas">
                Business Area
              </Link>
              <Link onClick={isToggleOff} className="m-2 responsive-item" to="/manufacturing">
                Manufacturing
              </Link>
              <Link onClick={isToggleOff} className="m-2 responsive-item" to="/features">
                Research &amp; Development
              </Link>
              <Link onClick={isToggleOff} className="m-2 responsive-item" to="/about">
                About Us
              </Link>
              <Link onClick={isToggleOff} className="m-2 responsive-item" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="header-item-flex">
        <div className="d-flex justify-end">
            <Link className="navbar-brand d-flex" to="/">
              <img
                src="/ethicalcurelogo-removebg-preview.png"
                width="70"
                height="70"
                className="d-inline-block align-top"
                alt=""
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 Domain
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/businessareas">
                    Overview
                  </Link>
                  <Link className="dropdown-item" to="/indiabranded">
                    INDIA - BRANDED GENERICS
                  </Link>
                  <Link className="dropdown-item" to="/emergingmarkets">
                    Emerging Markets - Branded Generics
                  </Link>
                  <Link className="dropdown-item" to="/usgenerics">
                    USA - GENERICS
                  </Link>
                  <Link className="dropdown-item" to="/africainstitution">
                    AFRICA-INSTITUSTION BUSINESS
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </div>
              </li> */}
              <li className="nav-item">
                <Link
                  to="/businessareas"
                  className="nav-link"
                  tabindex="-1"
                  aria-disabled="true"
                >
                 Domain
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/manufacturing"
                  className="nav-link"
                  tabindex="-1"
                  aria-disabled="true"
                >
                 Processing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/features"
                  tabindex="-1"
                  aria-disabled="true"
                >
                 Experimentation
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  tabindex="-1"
                  aria-disabled="true"
                >
                 Background
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Send a Message
                </Link>
              </li>
            </ul>
          </div>
        
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleButtonClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </>
  );
}

export default Header;
