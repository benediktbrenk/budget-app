import { styled } from "styled-components";

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledSearchAndFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 1rem;
  padding: 0.5rem;
`;

export const StyledSearchUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  width: 100%;
  list-style: none;
`;

export const StyledSearchLi = styled.li`
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

export const StyledSearchInput = styled.input`
  border-radius: 8px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
`;
export const StyledSearchInputSelect = styled.select`
  border-radius: 8px;
  border: 1px solid black;
  width: 100%;
  height: 50px;
  font-size: 0.7rem;
  padding: 1rem;
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.75rem;
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const StyledFilterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const StyledFilterButton = styled.button`
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 8px;
  font-size: 1rem;
`;