import { styled } from "styled-components";

const doubledBorder = "30px";
const minimalDeviceWidth = "600px";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  width: min(
  calc(100% - ${doubledBorder}),
  calc(${minimalDeviceWidth} - ${doubledBorder})
);
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

export const FilterInput = styled.input`
  border-radius: 8px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
`;
