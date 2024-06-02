import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromUsers } from "../../context/usersSlice";
import { followBtn } from "../../context/followeSlice";

function Users({ data }) {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers.value);
  const [editingUser, setEditingUser] = useState(null);

  const isFollowing = (userId) => {
    return followers.some((follower) => follower.id === userId);
  };

  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div className="users__card" key={user.id}>
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{user.username}</h2>
          <p>{user.name}</p>
          <p>{user.profession}</p>
          <p>{user.age}</p>
          <div className="users__btns">
            <button onClick={() => dispatch(removeFromUsers(user))}>
              Remove
            </button>
            <button onClick={() => dispatch(followBtn(user))}>
              {isFollowing(user.id) ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      ))}
      {editingUser && (
        <EditModal user={editingUser} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Users;
