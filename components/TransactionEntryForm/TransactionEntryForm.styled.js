import { styled } from 'styled-components';

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  //align-items: center;
  gap: 0.75rem;
  min-width: 300px;
  max-width: 800px;

  &select {
    overflow-x: 100px;
    overflow-y: 100px;
  }
`;

export const StyledFormField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //align-items: center;
  gap: 1rem;

  label {
    flex: 1;
  }

  select,
  input,
  textarea {
    flex: 2;
  }
`;

export const StyledFormButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

