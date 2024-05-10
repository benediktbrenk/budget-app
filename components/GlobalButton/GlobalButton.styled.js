import styled from "styled-components";

export const globalButton = styled.button`
  background-color: ${(props) => {
    switch (props.type) {
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
  color: ${(props) => (props.color === "white" ? "white" : "black")};
  font-size: larger;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
  border: none;

  &:hover {
    background-color: ${(props) => {
      switch (props.type) {
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
