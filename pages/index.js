import SearchBar from "@/components/SearchBar";
import TransactionList from "@/components/TransactionList";
import { useState } from "react";
import AccountBalance from "@/components/AccountBalance";
import { useSession } from "next-auth/react";
import { SectionContainer } from "../Homepage.styled";
import GoToTopButton from "@/components/GoToTopButton";
import { useRouter } from "next/router";

export default function HomePage({ transactions, deleteTransaction }) {
  const router = useRouter();
  const [search, setSearch] = useState({
    name: "",
    category: "",
    direction: "",
    dateFrom: "",
    dateTo: "",
    amountFrom: "",
    amountTo: "",
  });

   const { data: session, status } = useSession();

  if (!session && status !== "authenticated") {
    router.push("/login");
    return;
  }

  function handleCategoryFilter(category) {
    setSearch((prevSearch) => ({
      ...prevSearch,
      category: prevSearch.category === category ? "" : category,
    }));
  }

  function handleSearch(searchEntry) {
    setSearch(searchEntry);
  }

  const isSearchEntry = Object.values(search).some((value) => value !== "");

  const filteredSearch = transactions.filter((transaction) => {
    const dateFrom = search.dateFrom ? new Date(search.dateFrom) : null;
    const dateTo = search.dateTo ? new Date(search.dateTo) : null;
    const transactionDate = new Date(transaction.date);
    const amountFrom = search.amountFrom
      ? Number.parseFloat(search.amountFrom)
      : null;
    const amountTo = search.amountTo
      ? Number.parseFloat(search.amountTo)
      : null;
    const transactionAmount = Number.parseFloat(transaction.amount);

    const nameMatches =
      !search.name ||
      transaction.name?.toLowerCase().includes(search.name.toLowerCase());

    const categoryMatches =
      !search.category ||
      transaction.category?.toLowerCase() === search.category.toLowerCase();

    const directionMatches =
      !search.direction ||
      transaction.direction?.toLowerCase() === search.direction.toLowerCase();

    const dateMatches =
      !search.dateFrom ||
      !search.dateTo ||
      !dateFrom ||
      !dateTo ||
      (transactionDate >= dateFrom && transactionDate <= dateTo);

    const amountMatches =
      (!search.amountFrom && !search.amountTo) ||
      ((amountFrom === null || transactionAmount >= amountFrom) &&
        (amountTo === null || transactionAmount <= amountTo));

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
      <AccountBalance transactions={transactions} />
      <SearchBar
        transactions={transactions}
        search={search}
        onSearch={handleSearch}
        handleCategoryFilter={handleCategoryFilter}
        isSearchEntry={isSearchEntry}
      />
      <TransactionList
        transactions={filteredSearch}
        deleteTransaction={deleteTransaction}
      />

      <GoToTopButton />
    </>
  );
}
