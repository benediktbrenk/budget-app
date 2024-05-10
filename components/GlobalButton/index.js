import * as Styled from "./GlobalButton.styled";

export default function GlobalButton({ name, onClick, type, textColor }) {
  return (
    <Styled.globalButton onClick={onClick} type={type} texColor={textColor}>
      {name}
    </Styled.globalButton>
  );
}
