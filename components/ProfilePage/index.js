import React from "react";
import * as Styled from "./Profile.styled";
import { FaCircleUser } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import ProtectPage from "../ProtectPages";
import Image from "next/image";

const Profile = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>No session available. Please log in.</div>;
  }
  console.log(session);

  return (
    <ProtectPage>
      <Styled.ContainerBox>
        <Styled.ContainerCard>
          <h1>Profile</h1>
          <Styled.ProfileIconWrapper>
            {session.user.image ? (
              <Image
                src={session.user.image}
                width={160}
                height={160}
                alt="user image"
              />
            ) : (
              <FaCircleUser fontSize={180} />
            )}
          </Styled.ProfileIconWrapper>
          <Styled.ProfileContent>
            <Styled.ProfileContentItem>
              <h3>Name:</h3>
              <p>{session.user.name}</p>
            </Styled.ProfileContentItem>
            <Styled.ProfileContentItem>
              <h3>Email:</h3>
              <p>{session.user.email ? session.user.email : "Secret"}</p>
            </Styled.ProfileContentItem>
          </Styled.ProfileContent>
        </Styled.ContainerCard>
      </Styled.ContainerBox>
    </ProtectPage>
  );
};

export default Profile;
