import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";
import TransactionList from "@/components/TransactionList";
import Link from "next/link";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  text-decoration: none;
  color: black;
  background-color: grey;
  margin: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
`;

export default function HomePage({ transactions }) {
  return (
    <>
      <Header title="Transactions" />
      <StyledMain>
        <StyledDiv>
          <StyledLink href="/newentry">Add New Transaction</StyledLink>
          <StyledLink href="/reports">See reports</StyledLink>
        </StyledDiv>

        <TransactionList transactions={transactions} />
      </StyledMain>
    </>
  );
}
