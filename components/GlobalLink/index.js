import * as Styled from "./GlobalLink.styled";

export default function GlobalLink({ href, name, type, textColor }) {
  return (
    <Styled.LinkButton href={href} type={type} textColor={textColor}>
      {name}
    </Styled.LinkButton>
  );
}
