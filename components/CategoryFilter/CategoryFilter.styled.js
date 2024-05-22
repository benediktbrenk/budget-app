import styled from "styled-components";
import css from "styled-jsx/css";

const doubledBorder = "10px";
const minimalDeviceWidth = "600px";

export const CategoryFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: min(
    calc(100% - ${doubledBorder}),
    calc(${minimalDeviceWidth} - ${doubledBorder})
  );
  gap: 20px;
`;

export const FilterButton = styled.button`
  border: none;
  border-radius: 20px;
  height: 40px;
  width: 90px;
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
