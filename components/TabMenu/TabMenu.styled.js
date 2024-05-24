import styled from "styled-components";
import css from "styled-jsx/css";

export const TabContainer = styled.div``;

export const TabButton = styled.button`
  background-color: var(--color-secondary);
  border: 1px solid #ccc;
  cursor: pointer;
  padding: 10px 20px;
  float: left;
  margin: 10px 0 20px 0;
  color: var(--color-text);

  ${(props) => {
    switch (props.$position) {
      case "left":
        return css`
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);
        `;
      case "right":
        return css`
          border-top-right-radius: var(--border-radius);
          border-bottom-right-radius: var(--border-radius);
        `;
    }
  }};

  &:hover {
    background-color: #ddd;
  }
`;
