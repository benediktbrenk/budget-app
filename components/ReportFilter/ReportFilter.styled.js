import { styled } from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  width: 100%;
`;

export const FilterInputCheckbox = styled.input`
  border-radius: 8px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
`;

export const FilterInputSelect = styled.select`
  border-radius: 8px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
`;

export const FilterSegmentContainer = styled.div`
  display: flex;
  flex-direction: var(--flex-direction, row);
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: var(--flex-direction, column);
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const FilterButton = styled.button`
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 1rem;
`;

export const FilterInput = styled.input`
  border-radius: 8px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
`;
