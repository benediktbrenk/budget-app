import styled from "styled-components";

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  gap: 0.1rem;
  margin: 5px;

  label {
    padding-left: 7px;
    color: darkgrey;
    font-weight: bold;
    font-size: 0.9rem;
  }

  input {
    margin-left: 20px;
    margin-bottom: 2px;
    max-width: 125px;
  }

  input[type="email"] {
    margin-left: 50px;
  }
`;
