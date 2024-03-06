import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const navigate = useNavigate();
  const handleClick = (to) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(to);
  };
 
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-light text-dark-50 footer py-2">
        <div className="footer-section pt-3">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6 col-lg-3 wow fadeIn " data-wow-delay="0.1s">
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-dark">
                  Ethicalcure <span className="text-primary"></span>Pharmaceuticals
                </h1>
              </a>
              <p className="mb-0 style={{ fontSize: '14px' }}>">
                "Ethicalcure Pharmaceuticals offers cutting-edge treatments, backed by rigorous research and quality assurance, ensuring optimal patient care and outcomes."
              </p>
              <div className="d-flex pt-4">
                <a className="btn btn-success btn-social" href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn btn-success btn-social" href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn btn-success btn-social" href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-success btn-social" href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>

            <div className="col-md-7 col-lg-2 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-dark mb-2">Popular Link</h5>

              <Link onClick={() => handleClick('/about')} className="btn btn-outline-success m-1" to="/about">
                <FontAwesomeIcon icon={faAngleRight} />
                About Us
              </Link>

              <Link onClick={() => handleClick('/contact')} className="btn btn-outline-success m-1" to="/contact" >
                <FontAwesomeIcon icon={faAngleRight} />
                Contact Us
              </Link>
              <Link onClick={() => handleClick('/manufacturing')} className="btn btn-outline-success m-1" to="/manufacturing">
                <FontAwesomeIcon icon={faAngleRight} />
                Manufacturing
              </Link>
              <Link onClick={() => handleClick('/features')} className="btn btn-outline-success m-1" to="/features">
                <FontAwesomeIcon icon={faAngleRight} />
                R&d
              </Link>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start">
                &copy; Ethicalcure Pharmaceuticals, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="" className="btn btn-outline-success text-dark">Home</a>
                  <a href="" className="btn btn-outline-success text-dark">Cookies</a>
                  <a href="" className="btn btn-outline-success text-dark">Help</a>
                  <a href="" className="btn btn-outline-success text-dark">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
