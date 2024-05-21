import styled from "styled-components";
import css from "styled-jsx/css";

export const Button = styled.button`
  ${(props) => {
    switch (props.$type) {
      case "danger":
        return css`
          background-color: var(--color-red);
          &:hover {
            background-color: var(--button-danger-hover);
            opacity: var(--opacity-hover);
          }
        `;
      default:
        return css`
          background-color: var(--color-primary);
          &:hover {
            background-color: var(--color-primary);
            opacity: var(--opacity-hover);
          }
        `;
    }
  }};
  color: ${(props) => (props.$textColor === "white" ? "white" : "black")};
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border: none;
  min-height: 48px;
  min-width: 48px;
  cursor: pointer;
  font: 600 18px var(--font-family);
`;
