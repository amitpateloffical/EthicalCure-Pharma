import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const handleClick = (to) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(to);
  };

  return (
    <>
      <footer className="bg-secondary text-center text-lg-start text-white">
        <div className="container p-4">
          <div className="row">
            <h1 className="text-center footer-heading pb-2">EthicalCure-Pharmaceuticals</h1>
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              {/* <h2 className="p-3">EthicalCure Pharmaceuticals</h2> */}
              <div
                className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "150px", height: "150px" }}
              >
                <img src="footer.jpg" height="70" alt="" loading="lazy" />
              </div>
              <p className="text-center w-100">
                "Welcome to EthicalCure Pharma, where innovation meets integrity
                in pharmaceutical development. Committed to ethical practices
                and social responsibility, we strive to improve global
                healthcare while upholding the highest standards of quality and
                safety. Explore our portfolio of cutting-edge products and learn
                more about our dedication to sustainability, community
                engagement, and employee well-being."
                <br />
                Privacy Policy | Terms of Use
              </p>
            </div>
            {/* Repeat similar structures for other columns */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div
                className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "150px", height: "150px" }}
              >
                <img src="followus.jpg" height="60" alt="" loading="lazy" />
              </div>
              {/* <h2 className="text-center">Follow Us</h2> */}
              <p className="text-center">
                "Stay connected with us by following our social media channels
                for updates and exclusive content!"
              </p>
              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a className="text-white px-2" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 14 14"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M10.333 3.644a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5" />
                        <path d="M.858 3.431A2.573 2.573 0 0 1 3.431.858h6.862a2.573 2.573 0 0 1 2.573 2.573v6.862a2.573 2.573 0 0 1-2.573 2.573H3.43a2.573 2.573 0 0 1-2.573-2.573V3.43Z" />
                        <path d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0a2.55 2.55 0 1 0-5.1 0" />
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-white px-2" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 14 14"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.611.611 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.618.618 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-white ps-2" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 1000 1000"
                    >
                      <path
                        fill="currentColor"
                        d="M807 111v313h-64v-35q-37 39-74 39q-45 0-45-56V111h64v240q0 21 17 21t38-24V111h64zm-237 73v162q0 42-25 64t-68 22q-41 0-66.5-23.5T385 345V183q0-39 27.5-59.5T480 103q38 0 64 22t26 59zm-65 167V180q0-10-9-16.5t-19-6.5t-18 6.5t-8 16.5v171q0 26 26 26q28 0 28-26zM315 0h73l-55 165q-4 12-10 27.5t-10.5 28T305 248v176h-72V256q-2-12-29-85L147 0h73l46 169h5zm611 739q0 49-6 145q-4 50-38.5 79.5T797 995q-99 5-297 5q-199 0-297-5q-50-2-84.5-31.5T80 884q-6-96-6-145t6-145q4-50 38.5-79.5T203 483q98-5 297-5t297 5q50 2 84.5 31.5T920 594q6 96 6 145zm-71 91v-19h-53q0 2 .5 13t0 15.5T800 851t-7 10t-14 3q-10 0-15.5-6t-6-12t-.5-17v-48h98v-64q0-35-19-55t-54-20q-34 0-56.5 20.5T703 717v113q0 36 19.5 57.5T778 909q77 0 77-79zm-191 19V709q0-63-50-63q-25 0-46 23V559h-52v343h52v-20q22 23 49 23q47 0 47-56zm-250 53h51V649h-51v192q-17 19-31 19q-13 0-13-17V649h-52v213q0 44 36 44q30 0 60-32v28zM258 609h61v-50H140v50h60v293h58V609zm544 105v28h-45v-28q0-27 23-27q22 0 22 27zm-191-3v133q0 21-18 21q-14 0-25-11V696q10-10 22-10q21 0 21 25z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-white ps-2" href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Repeat similar structures for other columns */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div
                className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "150px", height: "150px" }}
              >
                <img src="location.avif" height="60" alt="" loading="lazy" />
              </div>
              <p className="text-center">
                <b>Address:</b> <br />
                250 Meters From Railway Station, Freeganj Rd, Ratlam, Madhya Pradesh
              </p>
             
              <a href="" className="email text-center">info@Ethicalcurepharma.in</a>
            </div>
            {/* Repeat similar structures for other columns */}
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <Link className="text-white" href="/">
            © 2024 Ethicalcure Pharma. All Rights Reserved.
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
