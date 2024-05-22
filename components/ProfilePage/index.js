import React from "react";
import * as Styled from "./Profile.styled";
import { ProfileIconWrapper } from "../LoginButton/LoginButton.styled";
import { FaCircleUser } from "react-icons/fa6";

const Profile = ({}) => {
  return (
    <Styled.FormField>
      <Styled.FormTitle>Profile Page</Styled.FormTitle>
      <Styled.ProfileIconWrapper>
        <FaCircleUser size={1000} />
      </Styled.ProfileIconWrapper>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
        </div>
      </form>
    </Styled.FormField>
  );
};

export default Profile;
