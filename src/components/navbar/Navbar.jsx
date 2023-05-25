import "./navbar.scss";
import profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook" />
          <i className="topIcon fa-brands fa-square-twitter" />
          <i className="topIcon fa-brands fa-linkedin" />
          <i className="topIcon fa-brands fa-square-instagram" />
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="listItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>

            <li className="listItem">
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>

            <li className="listItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>

            <li className="listItem">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>

            <li className="listItem">{user && "LOGOUT"}</li>
          </ul>
        </div>

        <div className="topRight">
          {user ? (
            <img className="topImg" src={profile} alt="profile" />
          ) : (
            <ul className="topList">
              <li className="listItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>

              <li className="listItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}

          <i className="searchIcon fa-solid fa-magnifying-glass" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
