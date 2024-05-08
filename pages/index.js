import SearchBar from "@/components/SearchBar";
import TransactionList from "@/components/TransactionList";
import Link from "next/link";
import { styled } from "styled-components";
import { useState } from "react";
import { StyledMain } from "@/components/Main/Main.styled";
import NavigationBar from "@/components/NavigationBar";

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

  const isSearchEntry = Object.values(search).some((value) => value !== "");

  const filteredSearch = transactions.filter((transaction) => {
    const dateFrom = search.dateFrom ? new Date(search.dateFrom) : null;
    const dateTo = search.dateTo ? new Date(search.dateTo) : null;
    const transactionDate = new Date(transaction.date);
    const amountFrom = search.amountFrom ? parseFloat(search.amountFrom) : null;
    const amountTo = search.amountTo ? parseFloat(search.amountTo) : null;
    const transactionAmount = parseFloat(transaction.amount);

    const nameMatches =
      search.name === "" ||
      transaction.name.toLowerCase().includes(search.name.toLowerCase());
    const categoryMatches =
      search.category === "" ||
      transaction.category.toLowerCase() === search.category.toLowerCase();
    const directionMatches =
      search.direction === "" ||
      transaction.direction.toLowerCase() === search.direction.toLowerCase();
    const dateMatches =
      !dateFrom ||
      !dateTo ||
      (transactionDate >= dateFrom && transactionDate <= dateTo);
    const amountMatches =
      (amountFrom === null || transactionAmount >= amountFrom) &&
      (amountTo === null || transactionAmount <= amountTo);

    return (
      nameMatches &&
      categoryMatches &&
      directionMatches &&
      dateMatches &&
      amountMatches
    );
  });

  return (
    <>
      <StyledMain>
        <StyledDiv>
          <SearchBar
            transactions={transactions}
            search={search}
            onSearch={setSearch}
            isSearchEntry={isSearchEntry}
          />
        </StyledDiv>
        <TransactionList transactions={filteredSearch} />
      </StyledMain>
      <NavigationBar />
    </>
  );
}
