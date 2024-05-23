import { styled } from "styled-components";

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.75rem;
  color: var(--color-text);
  align-items: center;
  border-radius: 12px;
  padding: 20px;
  gap: 5px;
  //margin: 20px;
  background: rgb(72, 147, 233);
  background: linear-gradient(
    180deg,
    rgba(72, 147, 233, 1) 0%,
    rgba(44, 85, 191, 1) 84%,
    rgba(20, 68, 190, 1) 100%
  );

  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  min-width: 325px;

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
    color: white;
  }

  p {
    font-size: 1rem;
    color: white;
  }

  h1 {
    color: white;
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
`;

export const ProfileIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 50%;
  background-color: #eee;
  width: 160px;
  height: 160px;
  overflow: hidden;
`;

export const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1px;
  width: 100%;
`;

export const ProfileContentItem = styled.section``;
