import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { SiGoogletranslate } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ showDark, handelShowDark }) => {
  return (
    <nav className={`nav-container ${showDark ? "" : "dark-background"}`}>
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/">
          <AiOutlineMenuFold className="menu-icon" />
        </Link>
      </div>
      <div className="right-container">
        {showDark ? (
          <CiDark className="nav-icons" onClick={handelShowDark} />
        ) : (
          <MdOutlineLightMode onClick={handelShowDark} className="nav-icons" />
        )}

        <IoIosNotificationsOutline className="nav-icons" />
        <SiGoogletranslate className="nav-icons" />
        <CgProfile className="nav-icons" />
      </div>
    </nav>
  );
};

export default Navbar;
