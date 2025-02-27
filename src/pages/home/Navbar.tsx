import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  // const user = useAppSelector(selectCurrentUser);
  // const user = useAppSelector(selectCurrentUser);
  // console.log(user?.role);

  const user = useAppSelector((state) => state.auth.user); // Get user from Redux

  let userRole: string; // Declare a new variable for the role string

  if (user && user.role) {
    switch (user.role) {
      case "admin":
        userRole = "admin";
        break;
      case "user":
        userRole = "user";
        break;
      default:
        userRole = "undefined"; // Or handle the default case appropriately
        break;
    }
  } else {
    userRole = "unknown"; // Handle null/undefined user or missing role
  }

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

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
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/productPage">Products</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="nav-button-area">
              {user ? (
                <>
                  <button onClick={handleLogout} className="btn-primary">
                    Logout
                  </button>
                  {/* Cart Button (Only show when logged in) */}
                  <Link className="btn-primary" to="/cart">
                    Cart
                  </Link>
                  <Link className="btn-primary" to={`/${userRole}/dashboard`}>
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link className="btn-primary" to="/login">
                    Login
                  </Link>
                  <Link className="btn-primary" to="/signup">
                    Signup
                  </Link>
                </>
              )}
              {/* <Link className="btn-primary" to="/login">
                login
              </Link>

              <button onClick={handleLogout} className="btn-primary">
                logout
              </button>

              <Link className="btn-primary" to="/signup">
                signup
              </Link> */}
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
