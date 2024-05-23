import styled from "styled-components";
import css from "styled-jsx/css";

const doubledBorder = "10px";
const minimalDeviceWidth = "395px";

export const CategoryFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: min(
    calc(100% - ${doubledBorder}),
    calc(${minimalDeviceWidth} - ${doubledBorder})
  );
  gap: 10px;
`;

export const FilterButton = styled.button`
  border: 2px solid;
  border-radius: var(--border-radius);
  height: 60px;
  width: 70px;
  color: black;
  background-color: ${(props) => props.$color || "#CCCCCC"};

  ${(props) =>
    props.$active &&
    css`
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    filter: brightness(1.1);
  }
`;
