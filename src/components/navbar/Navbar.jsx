import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  let users = useSelector((state) => state.users.value);
  let followers = useSelector((state) => state.followers.value);

  return (
    <div className="navbar">
      <h2>Redux Toolkit</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>
        All users <sup>{users.length}</sup>
      </NavLink>
      <NavLink to={"/follow-users"}>
        Follow users <sup>{followers.length}</sup>
      </NavLink>
    </div>
  );
}

export default Navbar;
