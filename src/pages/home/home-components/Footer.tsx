import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dsc0hliud/image/upload/v1737996969/ptje39qdjjkfth9vlcai.png"
                alt=""
              />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Testimonials</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
          </ul>
          <div className="footer-social">
            <Link to="/">
              <FaFacebookSquare />
            </Link>
            <Link to="/">
              <FaLinkedin />
            </Link>
            <Link to="/">
              <FaInstagramSquare />
            </Link>
            <Link to="/">
              <FaSquareTwitter />
            </Link>
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <div className="container">
          <p className="copy-right-para">
            © 2023 <span>TStore</span> All Rights Reserved , Inc.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
