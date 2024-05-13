import * as Styled from "./GlobalButton.styled";

export default function GlobalButton({ name, onClick, type, textColor }) {
  return (
    <Styled.globalButton onClick={onClick} type={type} textColor={textColor}>
      {name}
    </Styled.globalButton>
  );
}
