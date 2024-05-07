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
  //padding: 0.5rem;
`;

export const SearchUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  list-style: none;
`;

export const SearchLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: lightgray;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
`;

export const SearchInput = styled.input`
  border-radius: 8px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
  margin-left: 1rem;
`;
export const SearchInputSelect = styled.select`
  border-radius: 8px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
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
  margin: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 1.2rem;
`;