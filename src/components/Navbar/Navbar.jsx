import React from "react";
import { useState } from "react";
import classes from "./Navbar.module.css";

import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { HashLink as Link } from "react-router-hash-link";
// import Dropdown from "./Dropdown";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.png";
import medicaps_logo from "../../assets/medi-logo.png";
// import GrabBitBtn from "../common/GrabBitBtn/GrabBitBtn";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
const Scroll = require("react-scroll");
const Navbar = () => {
  const{loginWithRedirect,logout,user,isAuthenticated} = useAuth0()
  const Drop = Scroll.Link;
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  // // const [drop, setDrop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${!scrolled ? classes.header : classes.scrolledHeader}`}>
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <Drop activeClass={classes.active} to="home" spy={true} smooth={true} offset={-100} duration={600}>
            <Link to="/">
              <img src={Logo} alt="/" className={classes.logo} />
            </Link>
            <Link to="/">
              <img src={medicaps_logo} alt="/" className={classes.medi_logo} />
            </Link>
          </Drop>
        </div>

        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li className={classes.navLink}>
              <Drop activeClass={classes.active} to="home" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/">
                  Home
                </Link>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop activeClass={classes.active} to="about" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/about">
                  About
                </Link>
              </Drop>
            </li>

            <li className={classes.navLink}>
              <Drop activeClass={classes.active} to="events" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                {/* <Link className={classes.homeLink} to="/events"> */}
                {
                  <div className={classes.dropdown_container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button className={classes.dropdown_button}>Events</button>
                    {isHovered && (
                      <div className={classes.dropdown_content}>
                        {/* Dropdown content goes here */}
                        <Link to="/cultural">Cultural</Link>
                        <Link to="/sports">Sports</Link>
                        <Link to="/techno">Techno</Link>
                        <Link to="/management">Management</Link>
                        <Link to="/night"> Nights</Link>
                      </div>
                    )}
                  </div>
                }
                {/* </Link> */}
              </Drop>
            </li>

            <li className={classes.navLink}>
              <Drop activeClass={classes.active} to="ambassador" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/leaderboard">
                  Developers
                </Link>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop activeClass={classes.active} to="contact" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/contact">
                  Contact
                </Link>
              </Drop>
            </li>

            <li className={classes.navLink}>
              <Drop activeClass={classes.active} to="sponsor" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/sponsor">
                  Sponsors
                </Link>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop activeClass={classes.active} to="contact" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/glimpses">
                  Glimpses
                </Link>
              </Drop>
            </li>
            {!isAuthenticated&&<li className={classes.navLink}>
              <Drop activeClass={classes.active} to="about" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Button className={classes.homeLink} onClick={() => loginWithRedirect()} variant="contained" color="primary">
                  Login 
                </Button>
              </Drop>
            </li>}
            {isAuthenticated&&<li className={classes.navLink}>
              <Drop activeClass={classes.active} to="about" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Button className={classes.homeLink}  variant="contained" color="primary">
                  {user.email}
                </Button>
              </Drop>
            </li>}
            {isAuthenticated&&<li className={classes.navLink}>
              <Drop activeClass={classes.active} to="about" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Button className={classes.homeLink} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} variant="contained" color="primary">
                  logout
                </Button>
              </Drop>
            </li>}
          </ul>


          <a target="_blank" rel="noopener noreferrer" href="https://grabbits.vercel.app/">
            {/* <button className={classes.btn}>GrabBit</button> */}
            <div className={classes.btn}>{/* <GrabBitBtn label="GrabBit" /> */}</div>
          </a>

          <div className={classes.hamburger} onClick={() => setMobile(!mobile)}>
            {mobile ? <FontAwesomeIcon icon={faXmark} style={{ color: "white" }} size="3x" /> : <FiMenu size={20} />}
          </div>
        </div>

        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          <a target="_blank" rel="noopener noreferrer" href="https://grabbits.vercel.app/">
            {/* <button className={classes.btn1}>GrabBit</button> */}
            <div className={classes.btn1}>{/* <GrabBitBtn label="GrabBit" /> */}</div>
          </a>

          {/* Mobile Page */}

          <ul className={classes.mobileNav}>
          {isAuthenticated&&<li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="home" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Button className={classes.homeLink} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} variant="contained" color="primary">
                  Logout
                </Button>
              </Drop>
            </li>}
            {!isAuthenticated&&<li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="home" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Button className={classes.homeLink} onClick={() => loginWithRedirect()} variant="contained" color="primary">
                  Login
                </Button>
              </Drop>
            </li>}
            <li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="home" spy="true" smooth={true} offset={-120} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <HashLink className={classes.homeLink} to="/">
                  Home
                </HashLink>
              </Drop>
            </li>
            <li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="about" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/about">
                  About
                </Link>
              </Drop>
            </li>

            {/* <li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="ambassador" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/events">
                <div className={classes.dropdown_container1}>
                  <button className={classes.dropdown_button1} onClick={toggleDropdown}>
                    Events
                  </button>
                  {isOpen && (
                    <div className={classes.dropdown_content1}>

                      <a href="#cul" ><button onClick={setIsOpen(false)}>Cultural</button></a>
                      <a href="#" ><button onClick={setIsOpen(false)}>Techno</button></a>
                      <a href="#" ><button onClick={setIsOpen(false)}>Night </button></a>
                      <a href="#" ><button onClick={setIsOpen(false)}>Sports</button></a>
                    </div>
                  )}
                </div>
                </Link>
              </Drop>
            </li> */}

            <li>
              {/* <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="ambassador" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}> */}
              {/* <Link className={classes.homeLink} to="/events">
                  Events
                </Link> */}
              <div className={classes.dropdown_container1}>
                <button className={classes.dropdown_button1} onClick={toggleDropdown}>
                  Events
                </button>
                {isOpen && (
                  <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="ambassador" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                    <div className={classes.dropdowncontent}>
                      {/* Dropdown content goes here */}

                      <div className={classes.chotu_div1}>
                        <Link to="/cultural" className={classes.chotu}>
                          Cultural
                        </Link>
                        <Link to="/techno" className={classes.chotu}>
                          Techno
                        </Link>
                      </div>
                      <div className={classes.chotu_div2}>
                        <Link to="/sports" className={classes.chotu}>
                          Sports
                        </Link>
                        <Link to="/management" className={classes.chotu}>
                          Management
                        </Link>
                        <Link to="/night" className={classes.chotu}>
                          {" "}
                          Nights
                        </Link>
                      </div>
                    </div>
                  </Drop>
                )}
              </div>

              {/* </Drop> */}
            </li>

            {/* <li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="ambassador" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/events">
                  Events
                </Link>
              </Drop>
            </li> */}

            <li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="ambassador" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/leaderboard">
                  Developers
                </Link>
              </Drop>
            </li>
            <li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="contact" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/contact">
                  Contact
                </Link>
              </Drop>
            </li>
            <li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="contact" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/sponsor">
                  Sponsors
                </Link>
              </Drop>
            </li>
            <li>
              <Drop onClick={() => setMobile(!mobile)} activeClass={classes.active} to="contact" spy="true" smooth={true} offset={-100} duration={600} style={{ color: "white", textDecoration: "none" }}>
                <Link className={classes.homeLink} to="/glimpses">
                  Glimpses
                </Link>
              </Drop>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
