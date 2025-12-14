import React from "react";

const ProfileCard = ({ user }) => {
  if (!user.role) {
    throw new Error("User data missing!");
  }

  return (
    <div className="profile-card">
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  );
};

export default ProfileCard;
