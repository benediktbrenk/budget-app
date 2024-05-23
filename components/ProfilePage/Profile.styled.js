import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.75rem;
  padding: 40px;
  gap: 0.1rem;
  margin: 20px;
  color: var(--color-text);
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);

  label {
    padding-left: 7px;
    color: darkgrey;
    font-weight: bold;
    font-size: 0.9rem;
  }

  input,
  select,
  textarea {
    border: none;
    border-radius: 0.3rem;
    font-family: arial;
  }

  input,
  select {
    padding: 5px;
  }

  textarea {
    height: 50px;
  }

  h3 {
    color: darkgrey;
  }

  p {
    font-size: 1.1rem;
  }

  h1 {
    color: darkgrey;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: darkgrey;
`;

export const ProfileIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 50%;
  background-color: #eee;
  width: 50px;
  height: 50px;
`;
