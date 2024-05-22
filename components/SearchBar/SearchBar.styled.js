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
  border-radius: 8px;
  border: 1px solid #f8f9fa;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
  margin-left: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;
export const SearchInputSelect = styled.select`
  border-radius: 8px;
  border: 1px solid #f8f9fa;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const FilterButton = styled.button`
  padding: 0.8rem;
  margin: 0.3rem;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  color: black;
`;
