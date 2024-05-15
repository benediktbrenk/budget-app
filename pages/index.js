import SearchBar from "@/components/SearchBar";
import TransactionList from "@/components/TransactionList";
import { useState } from "react";
import AccountBalance from "@/components/AccountBalance";
import { useSession } from "next-auth/react";
import { SectionContainer } from "./Homepage.styled";
import GoToTopButton from "@/components/GoToTopButton";

export default function HomePage({ transactions }) {
  const { data: session } = useSession();

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
      {session ? (
        <>
          {/* <h5>Hello {session.user.name}</h5> */}
          <AccountBalance transactions={transactions} />
          <SearchBar
            transactions={transactions}
            search={search}
            onSearch={setSearch}
            isSearchEntry={isSearchEntry}
          />
          <TransactionList transactions={filteredSearch} />
        </>
      ) : (
        <SectionContainer>
          <h2>Login and check your Budget!</h2>
          <p>This way you can keep an eye on your finances</p>
          <span>
            <p>Try our Test Account:</p>
            <p>
              <strong>username:</strong> user
            </p>
            <p>
              <strong>password:</strong> user
            </p>
          </span>
        </SectionContainer>
      )}
    </>
  );
}
