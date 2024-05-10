import styled from "styled-components";

const doubledBorder = "30px";
const minimalDeviceWidth = "395px";

export const TransactionList = styled.ul`
  display: flex;
  flex-direction: column;
  width: min(
    calc(100% - ${doubledBorder}),
    calc(${minimalDeviceWidth} - ${doubledBorder})
  );
`;
