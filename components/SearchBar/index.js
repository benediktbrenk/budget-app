import { useState } from "react";
import TransactionCard from "../TransactionCard/index";
import {
  StyledFilterButton,
  StyledFilterContainer,
  StyledFilterItem,
  StyledSearchAndFilter,
  StyledSearchContainer,
  StyledSearchInput,
  StyledSearchInputSelect,
  StyledSearchUl,
} from "./SearchBar.styled";

function SearchBar({ transactions, search, onSearch, isSearchEntry }) {
  const [searchNameValue, setSearchNameValue] = useState(search.name);

  const filterTransactions = () => {
    return transactions.filter((transaction) => {
      const dateFrom = search.dateFrom ? new Date(search.dateFrom) : null;
      const dateTo = search.dateTo ? new Date(search.dateTo) : null;
      const transactionDate = new Date(transaction.date);
      const amountFrom = search.amountFrom
        ? parseFloat(search.amountFrom)
        : null;
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

  function handleResetFilters() {
    onSearch({
      name: "",
      category: "",
      direction: "",
      dateFrom: "",
      dateTo: "",
      amountFrom: "",
      amountTo: "",
    });
    setSearchNameValue("");
  }

  const handleKeyDown = (event) => {
    if (event.key === " " && event.target.selectionStart === 0) {
      event.preventDefault();
    }
  };

  const handleSearchChange = (event) => {
    const trimmedValue = event.target.value.trimStart();
    setSearchNameValue(trimmedValue);
    onSearch({ ...search, name: trimmedValue });
  };

  return (
    <StyledSearchContainer>
      <StyledSearchAndFilter>
        <StyledSearchInput
          type="search"
          placeholder="Search Transactions..."
          pattern="^(?!.*\s{2,}).+$"
          value={searchNameValue}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          maxLength={30}
        />
        <StyledFilterButton
          onClick={() => setIsFilter((isFilter) => !isFilter)}
        >
          Filter
        </StyledFilterButton>
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
              <label>Date Start</label>
              <StyledSearchInput
                type="date"
                value={search.dateFrom}
                onChange={(event) =>
                  onSearch({ ...search, dateFrom: event.target.value })
                }
              />
            </StyledFilterItem>
            <StyledFilterItem>
              <label>Date End</label>
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
            <StyledFilterItem>
              <label>X</label>
              <StyledFilterButton onClick={handleResetFilters}>
                Clear Filter
              </StyledFilterButton>
            </StyledFilterItem>
          </StyledFilterContainer>
        </>
      ) : (
        <></>
      )}

      <StyledSearchUl>
        {isSearchEntry ? (
          filterTransactions().map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <></>
        )}
      </StyledSearchUl>
    </StyledSearchContainer>
  );
}

export default SearchBar;
