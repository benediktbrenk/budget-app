import * as Styled from "./GlobalLink.styled";

export default function GlobalLink({ href, name, type }) {
  console.log(href);
  return (
    <Styled.LinkButton href={href} type={type}>
      {name}
    </Styled.LinkButton>
  );
}
