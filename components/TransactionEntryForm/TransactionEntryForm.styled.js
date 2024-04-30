import { styled } from "styled-components";

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.75rem;
  min-width: 300px;
  max-width: 800px;
`;

export const StyledFormField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

export const StyledFormButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
