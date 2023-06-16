import React from "react";
import bloodlogo from "../Images/Logo.png";
import Button from "@mui/material/Button";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import imgsrc from "../Images/profile-icon.png"
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Menu = () => (
  <>
    <Link to="/">
      <p>Home</p>
    </Link>
    <Link to="/findblood">
      <p>Find Blood</p>
    </Link>
  </>
);


export default function Header(props) {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [toggleProfileMenu, setToggleProfileMenu] = React.useState(false);
  const accessToken = localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate('/');
    
  };

  const renderAuthButtons = () => {
    if (accessToken) {
      return (
        <div className="auth-buttons">
          <div
            className="profile-picture"
            onClick={() => setToggleProfileMenu(!toggleProfileMenu)}
          >
            <img
              src={imgsrc}
              alt="Profile"
              
            />
          </div>
          {toggleProfileMenu && (
            <div className="profile-menu">
              
                
                  <Link to="/profile"> <Button sx={{color: 'black'}}>View Profile</Button></Link>
                 <Button sx={{color: 'black'} } onClick={handleLogout}>Logout</Button>
             
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="auth-buttons">
          <Link to="/registernow">
            <p>Register Now</p>
          </Link>
          <Button
            component={Link}
            to="/login"
            sx={{
              color: "#000000",
              minHeight: "50px",
              minWidth: "120px",
              border: "2px black solid",
              ":hover": {
                color: "black",
                border: "2px black solid",
              },
            }}
            variant="outlined"
            className="button_but"
          >
            Log in
          </Button>
        </div>
      );
    }
  };

  return (
    <div className={`header ${props.showBackground ? "with-background" : ""}`}>
      <div className="bar">
        <Link to="/">
          <img className="blood-img" src={bloodlogo} alt="Blood Logo" />
        </Link>
        <div className="all_cont">
          <div className="links-cont">
            <Menu />
          </div>
          <div className="button">{renderAuthButtons()}</div>
        </div>
        <div className="header-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={20}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={20}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="header-menu_container scale-up-center">
              <div className="header-menu_container_links">
                <Menu />
                <div className="header-menu_button">
                  <Link to="/registernow">
                    <p>Register Now</p>
                  </Link>
                  {accessToken ? (
                    <div
                      className="profile-picture"
                      onClick={() => setToggleProfileMenu(!toggleProfileMenu)}
                    >
                      <img
                        src="default-profile-picture.png" // Replace with the URL of the default profile picture
                        alt="Profile"
                      />
                    </div>
                  ) : (
                    <Button
                      component={Link}
                      to="/login"
                      sx={{
                        color: "#000000",
                        border: "2px black solid",
                        ":hover": {
                          color: "black",
                          border: "2px black solid",
                        },
                      }}
                      variant="outlined"
                    >
                      Log in
                    </Button>
                  )}
                  {toggleProfileMenu && (
                    <div className="profile-menu">
                      <ul>
                        <li>
                          <Button onClick={handleLogout}>Logout</Button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
