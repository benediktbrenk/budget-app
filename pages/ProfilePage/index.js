import Profile from "@/components/ProfilePage";
import React from "react";

const user = {
  name: "John Doe",
  email: "john@example.com",
  age: 30,
};

const ProfilePage = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

export default ProfilePage;
