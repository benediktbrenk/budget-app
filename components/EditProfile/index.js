import React, { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Button } from "../Button/Button.styled";
import { ProfileIconWrapper } from "../LoginButton/LoginButton.styled";
import * as Styled from "./EditProfile.styled";
export default function EditProfile({ userData, updateUserData }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserData(formData);
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <ProfileIconWrapper>
        <FaCircleUser size={24} />
      </ProfileIconWrapper>

      <Styled.FormField onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Save</Button>
      </Styled.FormField>
    </div>
  );
}
