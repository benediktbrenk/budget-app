import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import TransactionList from "@/components/TransactionList";
import Link from "next/link";
import { styled } from "styled-components";
import { useState } from "react";

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
  const [search, setSearch] = useState({
    name: "",
    category: "",
    direction: "",
    dateFrom: "",
    dateTo: "",
    amountFrom: "",
    amountTo: "",
  });

  return (
    <main>
      <Header title="Transactions" />
      <StyledDiv>
        <SearchBar
          transactions={transactions}
          search={search}
          onSearch={setSearch}
        />
        <StyledLink href="/newentry">Add New Transaction</StyledLink>
      </StyledDiv>
      {search !== "" ? <></> : <TransactionList transactions={transactions} />}
    </main>
  );
}
