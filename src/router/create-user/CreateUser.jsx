import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { addTooUsers } from "../../context/usersSlice";

function CreateUser() {
  let dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = {
      id: new Date().getTime(),
      name,
      age: +age,
      profession,
      gender,
    };
    console.log(users);
    dispatch(addTooUsers(users));
    setUserName("");
    setName("");
    setAge("");
    setProfession("");
    setGender("");
  };

  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          required
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          type="text"
          placeholder="profession"
        />
        <input
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="age"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          name=""
          id=""
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
