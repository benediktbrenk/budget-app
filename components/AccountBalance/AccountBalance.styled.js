import styled from "styled-components";

export const StyledAccountBalance = styled.article`
  display: flex;
  flex-direction: row;
  background-color: #d7d7d7;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.75rem;
  min-width: 250px;
  max-width: 300px;
`;

export const StyledBalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledP = styled.p`
  position: absolute;
  top: 0.5rem;
`;

export const StyledBalance = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
`;

export const StyledIncomeExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// color: ${(props) => {
//     return props === "Income"
//       ? "var(--amount-color-green)"
//       : "var(--amount-color-red)";
//   }};
