import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"

function Users() {
  return (
    <div className='users__wrapper'>
        <div className="users__card">
            <img src={male} alt="" />
            <h2>John Doe</h2>
            <p>Web developer</p>
            <p>32 years old</p>
            <button>Remove</button>
        </div>
        <div className="users__card">
            <img src={female} alt="" />
            <h2>Jane Doe</h2>
            <p>Designer</p>
            <p>24 years old</p>
            <button>Remove</button>
        </div>
    </div>
  )
}

export default Users