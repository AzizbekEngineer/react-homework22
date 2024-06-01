import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <div className='navbar'>
        <h2>Redux Toolkit</h2>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create-user"}>Create user</NavLink>
        <NavLink to={"/all-users"}>All users <sup>0</sup></NavLink>
    </div>
  )
}

export default Navbar