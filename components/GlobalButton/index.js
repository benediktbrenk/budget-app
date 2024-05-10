import * as Styled from "./GlobalButton.styled";

export default function GlobalButton({ name, onClick }) {
  return <Styled.globalButton onClick={onClick}>{name}</Styled.globalButton>;
}
