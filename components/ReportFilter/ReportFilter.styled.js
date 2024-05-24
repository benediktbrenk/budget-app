import { styled } from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;
`;

export const FilterInputSelect = styled.select`
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  font: 400 12px/14px var(--font-family);
  height: 30px;
`;

export const FilterSegmentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text);

  select {
    color: var(--color-text);
    background-color: var(--color-secondary);
  }
`;

export const CalendarButton = styled.button`
  border: none;
  color: var(--color-text);
  border-radius: var(--border-radius);
  height: 30px;
  width: 40px;
  background-color: var(--color-secondary);
  border: 1px solid var(--color-border);

  &:hover {
    filter: brightness(1.1);
  }
`;
