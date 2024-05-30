import { styled } from "styled-components";

export const FilterBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 550px;
  gap: 20px;
  margin: 0px 10px;
  padding: 0px 10px;

  @media (min-width: 600px) {
    margin-left: 10px;
    max-width: 550px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchAndFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin: 0px 10px;
  max-width: 550px;
`;

export const SearchInput = styled.input`
  display: flex;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  width: 100%;
  max-width: 600px;
  height: 30px;
  font-size: 0.7rem;
  padding: 10px;
  box-shadow: var(--box-shadow);
  background-color: var(--color-secondary);
`;
export const SearchInputSelect = styled.select`
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  height: 30px;
  font-size: 0.7rem;
  padding: 5px;
  box-shadow: var(--box-shadow);
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;
export const FilterHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  padding-bottom: 5px;
  gap: 15px;
  width: 100%;
  color: var(--color-text);
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 0.7rem;
  color: var(--color-text);

  select {
    color: var(--color-text);
    background-color: var(--color-secondary);
  }
  p {
    margin: 0;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: var(--color-text);
  box-shadow: var(--box-shadow);
  height: 30px;
  width: 40px;
  background-color: var(--color-secondary);
`;

export const CalendarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  box-shadow: var(--box-shadow);
  height: 30px;
  width: 40px;
  background-color: var(--color-secondary);
  &:hover {
    filter: brightness(1.1);
  }
`;
