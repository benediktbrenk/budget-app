import styled from "styled-components";
import css from "styled-jsx/css";

export const CategoryFilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FilterButton = styled.button`
  border: none;
  border-radius: 20px;
  height: 30px;
  width: 85px;
  background-color: ${(props) => props.$color || "#CCCCCC"};

  ${(props) =>
    props.$active &&
    css`
      outline: none;
      box-shadow: 0 0 0 3px black;
    `}

  &:hover {
    filter: brightness(1.1);
  }
`;
