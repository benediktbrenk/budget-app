import React from "react";
import * as Styled from "./Profile.styled";
import { FaCircleUser } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import Image from "next/image";
import DarkModeSwitch from "../Switch";

export default function Profile({ isDarkModeOn, toggleSwitch }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>No session available. Please log in.</div>;
  }

  return (
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
            <p>Name:</p>
            <h3>{session.user.name}</h3>
          </Styled.ProfileContentItem>
          <Styled.ProfileContentItem>
            <p>Email:</p>
            <h3>{session.user.email ? session.user.email : "Secret"}</h3>
          </Styled.ProfileContentItem>
          <DarkModeSwitch
            isDarkModeOn={isDarkModeOn}
            toggleSwitch={toggleSwitch}
          />
        </Styled.ProfileContent>
      </Styled.ContainerCard>
    </Styled.ContainerBox>
  );
}
