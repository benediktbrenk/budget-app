import styled from "styled-components";

export const AccountBalanceCard = styled.article`
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

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BalanceTitle = styled.div`
  font-weight: lighter;
`;

export const BalanceSum = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const IncomeExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const TotalIncome = styled.p`
  color: var(--amount-color-green);
`;
export const TotalExpense = styled.p`
  color: var(--amount-color-red);
`;
