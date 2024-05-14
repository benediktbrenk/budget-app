import styled from "styled-components";
import css from "styled-jsx/css";

export const Button = styled.button`
  ${(props) => {
    switch (props.$type) {
      case "submit":
        return css`
          background-color: var(--button-submit);
          &:hover {
            background-color: var(--button-submit-hover);
          }
        `;
      case "edit":
        return css`
          background-color: var(--button-edit);
          &:hover {
            background-color: var(--button-edit-hover);
          }
        `;
      case "save":
        return css`
          background-color: var(--button-save);
          &:hover {
            background-color: var(--button-save-hover);
          }
        `;
      case "cancel":
        return css`
          background-color: var(--button-cancel);
          &:hover {
            background-color: var(--button-cancel-hover);
          }
        `;
      case "danger":
        return css`
          background-color: var(--button-danger);
          &:hover {
            background-color: var(--button-danger-hover);
          }
        `;
        return css`
          background-color: var(--button);
          &:hover {
            background-color: var(--button-hover);
          }
        `;
    }
  }};
  color: ${(props) => (props.$textColor === "white" ? "white" : "black")};
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
  border: none;
  min-height: 48px;
  min-width: 48px;
  cursor: pointer;
  font: 600 18px var(--font-family);
`;
