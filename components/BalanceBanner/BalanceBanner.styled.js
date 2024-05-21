import styled from "styled-components";

export const AccountBalanceCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: transparent;
  min-width: 350px;
  gap: 20px;
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: larger;
`;

export const BalanceSum = styled.div`
  font-size: larger;
  font-weight: bold;
`;

export const IncomeExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TotalIncome = styled.p`
  color: var(--amount-color-green);
`;
export const TotalExpense = styled.p`
  color: var(--amount-color-red);
`;
