import styled from "styled-components";

export const StyledAccountBalance = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: var(--lightgrey);
  padding: 0.75;
  margin: 1rem;
  border-radius: 0.75rem;
  min-width: 250px;
  max-width: 300px;
`;

export const StyledBalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledP = styled.div`
  font-weight: lighter;
`;

export const StyledBalance = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledIncomeExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const StyledIncome = styled.p`
  color: var(--amount-color-green);
`;
export const StyledExpense = styled.p`
  color: var(--amount-color-red);
`;
