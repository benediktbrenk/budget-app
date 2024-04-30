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
  font-size: 1rem;
  padding: 1rem;
  margin-top: 5px;
`;
