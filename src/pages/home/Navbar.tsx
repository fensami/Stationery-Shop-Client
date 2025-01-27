import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-area-wrapper">
        <div className="container">
          <div className="nav-area">
            <div className="logo-area">
              <img
                src="https://res.cloudinary.com/dsc0hliud/image/upload/v1737996969/ptje39qdjjkfth9vlcai.png"
                alt=""
              />
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Project</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="nav-button-area">
              <Link className="btn-primary" to="/">
                login
              </Link>
              <Link className="btn-primary" to="/">
                signup
              </Link>
              {/* when Login Then showing Cart option */}
              {/* <Link className="btn-primary" to="/">
                Cart
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
