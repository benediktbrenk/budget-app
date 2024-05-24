import styled from "styled-components";

export const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(
    calc(100% - 30px),
    calc(var(--breakpoint-1) - 30px)
  );
`;

export const Headline = styled.h2`
  padding: 0 0 0.5rem 1rem;
  font: 700 20px var(--font-family);
`;

export const TransactionList = styled.ul`
  display: flex;
  flex-direction: column;
`;
