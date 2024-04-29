import { StyledItemContainer } from "./TransactionDetails.styled";
import { StyledDetailsContainer } from "./TransactionDetails.styled";

export default function TransactionDetails({ currentTransaction }) {
  return (
    <StyledDetailsContainer>
      <StyledItemContainer>
        <p>{currentTransaction.name}</p>
        <p>
          {currentTransaction.direction === "Expense" ? "- " : "+ "}
          {currentTransaction.amount}
          {currentTransaction.currency}
        </p>
      </StyledItemContainer>
      <StyledItemContainer>
        <p>{currentTransaction.date}</p>
        <p>{currentTransaction.paymentMethod}</p>
      </StyledItemContainer>
      <p>{currentTransaction.category}</p>
      <p>{currentTransaction.description}</p>
    </StyledDetailsContainer>
  );
}
