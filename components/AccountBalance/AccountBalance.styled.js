import styled from "styled-components";

export const AccountBalanceCard = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-secondary-light);
  padding: 0 20px;
  margin: 10px 20px;
  border-radius: var(--border-radius);
  width: 100%;
  min-width: 300px;
  max-width: 550px;

  //border: 0.5px solid lightgrey;
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const BalanceTitle = styled.div`
  font-weight: bold;
  color: grey;
  font-size: 16px;
`;

export const BalanceSum = styled.div`
  font-size: 2rem;
  font-weight: bolder;
`;

export const IncomeExpenseContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const TotalIncome = styled.p`
  color: var(--color-green);
  font-weight: bold;
`;
export const TotalExpense = styled.p`
  color: var(--color-red);
  font-weight: bold;
`;

export const DirectionContainerItem = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const ArrowBoxIncome = styled.span`
  width: 24px;
  height: 24px;
  background-color: var(--color-green);
  color: #454444;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  border-radius: 6px;
`;

export const ArrowBoxExpense = styled.span`
  width: 24px;
  height: 24px;
  background-color: var(--color-red);
  color: #454444;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  border-radius: 6px;
`;

export const IconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;