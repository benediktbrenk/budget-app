import Link from "next/link";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  background-color: ${(props) => {
    switch (props.type) {
      case "submit":
        return `var(--button-submit)`;
      case "edit":
        return `var(--button-edit)`;
      case "succes":
        return `var(--button-save)`;
      case "cancel":
        return `var(--button-cancel)`;
      case "danger":
        return `var(--button-delete)`;
      default:
        return `var(--button-background)`;
    }
  }};
  color: ${(props) => (props.textColor === "white" ? "white" : "black")};
  padding: 10px 18px;
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
  border: none;
  min-height: 48px;
  min-width: 48px;
  text-decoration: none;
  cursor: pointer;
  font: 600 18px var(--font-family);
  display: flex;
  justify-content: center;
  align-items: center;

  &:visited,
  :active {
    text-decoration: none;
  }

  &:hover {
    background-color: ${(props) => {
      switch (props.type) {
        case "submit":
          return `var(--button-submit-hover)`;
        case "edit":
          return `var(--button-edit-hover)`;
        case "success":
          return `var(--button-save-hover)`;
        case "cancel":
          return `var(--button-cancel-hover)`;
        case "danger":
          return `var(--button-delete-hover)`;
        default:
          return `var(--button-hover)`;
      }
    }};
  }
`;