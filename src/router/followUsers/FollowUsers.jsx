import React from "react";
import "./follow.css";

import Users from "../../components/users/Users";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";

const FollowUsers = () => {
  let followers = useSelector((state) => state.followers.value);
  console.log(followers);
  return (
    <div className="follow__users">
      {followers.length ? <Users data={followers} /> : <Empty />}
    </div>
  );
};

export default FollowUsers;
