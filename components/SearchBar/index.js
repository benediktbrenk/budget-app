import { useState } from "react";
import TransactionCard from "../TransactionCard/index";
import {
  StyledFilterButton,
  StyledFilterContainer,
  StyledFilterItem,
  StyledSearchAndFilter,
  StyledSearchContainer,
  StyledSearchForm,
  StyledSearchInput,
  StyledSearchInputSelect,
  StyledSearchUl,
} from "./SearchBar.styled";

function SearchBar({ transactions, search, onSearch }) {
  const filterTransactions = () => {
    return transactions.filter((transaction) => {
      // Suche nach Name, Datum, Kategorie, Betrag und Richtung
      const dateFrom = search.dateFrom ? new Date(search.dateFrom) : null;
      const dateTo = search.dateTo ? new Date(search.dateTo) : null;
      const transactionDate = new Date(transaction.date);
      const amountFrom = search.amountFrom
        ? parseFloat(search.amountFrom)
        : null;
      const amountTo = search.amountTo ? parseFloat(search.amountTo) : null;
      const transactionAmount = parseFloat(transaction.amount);

      const nameMatches = transaction.name
        .toLowerCase()
        .includes(search.name.toLowerCase());
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
        !amountFrom ||
        !amountTo ||
        (transactionAmount >= amountFrom && transactionAmount <= amountTo);

      return (
        nameMatches &&
        categoryMatches &&
        directionMatches &&
        dateMatches &&
        amountMatches
      );
    });
  };
  const [isFilter, setIsFilter] = useState(false);

  function handleIsFilter() {
    setIsFilter((prevState) => !prevState);
  }

  return (
    <StyledSearchContainer>
      <StyledSearchAndFilter>
        <StyledSearchInput
          type="search"
          placeholder="Search Transactions..."
          value={search.name}
          onChange={(event) =>
            onSearch({ ...search, name: event.target.value })
          }
        />
        <StyledFilterButton onClick={handleIsFilter}>Filter</StyledFilterButton>
      </StyledSearchAndFilter>
      {isFilter ? (
        <>
          <StyledFilterContainer>
            <StyledFilterItem>
              <label>Category</label>
              <StyledSearchInputSelect
                value={search.category}
                onChange={(event) =>
                  onSearch({ ...search, category: event.target.value })
                }
              >
                <option value="">All</option>
                <option value="Groceries">Groceries</option>
                <option value="Housing">Housing</option>
                <option value="Insurance">Insurance</option>
              </StyledSearchInputSelect>
            </StyledFilterItem>
            <StyledFilterItem>
              <label>Direction</label>
              <StyledSearchInputSelect
                value={search.direction}
                onChange={(event) =>
                  onSearch({ ...search, direction: event.target.value })
                }
              >
                <option value="">All</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </StyledSearchInputSelect>
            </StyledFilterItem>
          </StyledFilterContainer>
          <StyledFilterContainer>
            <StyledFilterItem>
              <label>Date From</label>
              <StyledSearchInput
                type="date"
                value={search.dateFrom}
                onChange={(event) =>
                  onSearch({ ...search, dateFrom: event.target.value })
                }
              />
            </StyledFilterItem>
            <StyledFilterItem>
              <label>Date To</label>
              <StyledSearchInput
                type="date"
                value={search.dateTo}
                onChange={(event) =>
                  onSearch({ ...search, dateTo: event.target.value })
                }
              />
            </StyledFilterItem>
          </StyledFilterContainer>
          <StyledFilterContainer>
            <StyledFilterItem>
              <label>Amount From</label>
              <StyledSearchInput
                type="number"
                placeholder="Search by Amount From"
                value={search.amountFrom}
                onChange={(event) =>
                  onSearch({ ...search, amountFrom: event.target.value })
                }
              />
            </StyledFilterItem>
            <StyledFilterItem>
              <label>Amount To</label>
              <StyledSearchInput
                type="number"
                placeholder="Search by Amount To"
                value={search.amountTo}
                onChange={(event) =>
                  onSearch({ ...search, amountTo: event.target.value })
                }
              />
            </StyledFilterItem>
          </StyledFilterContainer>
        </>
      ) : (
        <></>
      )}

      <StyledSearchUl>
        {filterTransactions().map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </StyledSearchUl>
    </StyledSearchContainer>
  );
}

export default SearchBar;
