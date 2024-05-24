import { styled } from "styled-components";

export const FilterBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 600px) {
    margin-left: 10px;
    max-width: 60dvw;
    min-width: 60vw;
    width: 100px;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchAndFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  min-width: 375px;
  margin: 0.2rem;
`;

export const SearchInput = styled.input`
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
  margin-left: 1rem;
  box-shadow: var(--box-shadow);
  background-color: var(--color-secondary);
`;
export const SearchInputSelect = styled.select`
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
  box-shadow: var(--box-shadow);
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
  gap: 0.5rem;
  color: var(--color-text);
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  color: var(--color-text);

  select {
    color: var(--color-text);
    background-color: var(--color-secondary);
  }
`;

export const FilterButton = styled.button`
  padding: 0.8rem;
  margin: 0.3rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1.2rem;
  color: var(--color-text);
  box-shadow: var(--box-shadow);
  background-color: var(--color-secondary);
`;
