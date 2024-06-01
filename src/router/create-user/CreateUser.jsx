import React from 'react'
import "./CreateUser.css"

function CreateUser() {
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form className='create__user-form' action="">
        <input type="text" placeholder='name' />
        <input type="text" placeholder='profession' />
        <input type="number" placeholder='age' />
        <select name="" id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser