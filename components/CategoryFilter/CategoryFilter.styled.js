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
  color: var(--color-text);

  ${(props) =>
    props.$active &&
    css`
      outline: none;
      box-shadow: 0 0 0 2px var(--box-shadow-active);
    `}

  &:hover {
    filter: brightness(1.1);
  }
`;
