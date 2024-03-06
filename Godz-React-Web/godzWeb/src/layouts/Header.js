import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ image }) => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink to="/shops" className={({ isActive }) => (isActive ? "text-primary" : "")}>Shop</NavLink>
      <NavLink to="/socials" className={({ isActive }) => (isActive ? "text-primary" : "")}>Social</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "text-primary" : "")}>About us</NavLink>
    </header>
  );
};

export default Header;
