import React from "react";
import { useUser } from "./UserContext";

function UserProfile() {
  const { user } = useUser();

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <p>Name: {user.firstName + " " + user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;
