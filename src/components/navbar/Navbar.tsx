import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span onClick={handelClick} className="logo">
          Hotelbooking
        </span>
        <div className="navItems">
          <button className="navButton">Home</button>
          <button className="navButton">Rooms</button>
          <button className="navButton">Gallery</button>
          <button className="navButton">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
