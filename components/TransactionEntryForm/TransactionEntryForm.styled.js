import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 1rem;
  gap: 0.75rem;
  min-width: 300px;
  max-width: 800px;
  margin-bottom: 80px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

export const FormButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
