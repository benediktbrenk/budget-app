import styled from "styled-components";
import css from "styled-jsx/css";

export const CategoryFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FilterButton = styled.button`
  border: none;
  border-radius: 20px;
  height: 30px;
  width: 85px;
  font: 600 12px/14px var(--font-family);
  background-color: ${(props) => props.$color || "#CCCCCC"};
  color: white;

  ${(props) =>
    props.$active &&
    css`
      outline: none;
      box-shadow: 0 0 0 1px var(--color-secondary-dark);
    `}

  &:hover {
    filter: brightness(1.1);
  }
`;
