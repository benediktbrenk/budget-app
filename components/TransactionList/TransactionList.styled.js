import styled from "styled-components";

const doubledBorder = "30px";
const minimalDeviceWidth = "395px";

export const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(
    calc(100% - ${doubledBorder}),
    calc(${minimalDeviceWidth} - ${doubledBorder})
  );
`;

export const Headline = styled.h2`
  padding: 0 0 0.5rem 1rem;
  font: 700 20px var(--font-family);
  color: var(--color-text);
`;

export const TransactionList = styled.ul`
  display: flex;
  flex-direction: column;
`;
