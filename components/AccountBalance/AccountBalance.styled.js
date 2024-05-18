import styled from "styled-components";

export const AccountBalanceCard = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: transparent;
  min-width: 250px;
  max-width: 350px;
  gap: 20px;
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BalanceSum = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const IncomeExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  gap: 20px;
`;

export const TotalIncome = styled.p`
  color: var(--amount-color-green);
`;
export const TotalExpense = styled.p`
  color: var(--amount-color-red);
`;
