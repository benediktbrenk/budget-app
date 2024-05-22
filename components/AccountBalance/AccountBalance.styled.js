import styled from "styled-components";

export const AccountBalanceCard = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: var(--color-secondary-light);
  padding: 0.75;
  margin: 1rem;
  border-radius: var(--border-radius);
  min-width: 350px;
  max-width: 650px;
  border: 0.5px solid lightgrey;
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
  color: var(--color-green);
`;
export const TotalExpense = styled.p`
  color: var(--color-red);
`;
