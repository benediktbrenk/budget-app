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
  //width: 100%;
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
  border: 1px solid #f8f9fa;
  width: 100%;
  max-width: 600px;
  height: 40px;
  font-size: 0.7rem;
  padding: 10px;
  box-shadow: var(--box-shadow);
`;
export const SearchInputSelect = styled.select`
  border-radius: var(--border-radius);
  border: 1px solid #f8f9fa;
  //width: 100%;
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
  //margin: 0.75rem;
  //padding: 0.5rem;
  gap: 15px;
`;
export const FilterHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin: 5px;
  padding: 5px; */
  gap: 15px;
  width: 100%;
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  font-size: 0.7rem;
`;

export const FilterButton = styled.button`
  padding: 10px;
  //margin: 5px;
  border: 1px solid lightgray;
  border-radius: var(--border-radius);
  font-size: 1rem;
  color: black;
  box-shadow: var(--box-shadow);
`;
