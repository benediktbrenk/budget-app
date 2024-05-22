import React from "react";
import * as Styled from "./Profile.styled";
import { ProfileIconWrapper } from "../LoginButton/LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import ProtectPage from "../ProtectPages";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>No session available. Please log in.</div>;
  }

  return (
    <ProtectPage>
      <Styled.Container>
        <h1>Profile</h1>
        <Styled.ProfileIconWrapper>
          <FaCircleUser size={50} />
        </Styled.ProfileIconWrapper>

        <div>
          <h3>Name:</h3>
          <p>{session.user.name}</p>
        </div>
        <div>
          <h3>Email:</h3>
          <p>{session.user.email}</p>
        </div>
      </Styled.Container>
    </ProtectPage>
  );
};

export default Profile;
