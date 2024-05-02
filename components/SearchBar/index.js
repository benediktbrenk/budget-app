import { useState } from "react";
import TransactionCard from "../TransactionCard/index";
import * as Styled from "./SearchBar.styled";

function SearchBar({ transactions, search, onSearch, isSearchEntry }) {
  const [searchNameValue, setSearchNameValue] = useState(search.name);

  function filterTransactions() {
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
  }
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
    <Styled.SearchContainer>
      <Styled.SearchAndFilter>
        <Styled.SearchInput
          type="search"
          placeholder="Search Transactions..."
          pattern="^(?!.*\s{2,}).+$"
          value={searchNameValue}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          maxLength={30}
        />
        <Styled.FilterButton
          onClick={() => setIsFilter((isFilter) => !isFilter)}
        >
          Filter
        </Styled.FilterButton>
      </Styled.SearchAndFilter>
      {isFilter && (
        <Styled.FilterBox>
          <Styled.FilterContainer>
            <Styled.FilterItem>
              <label>Category</label>
              <Styled.SearchInputSelect
                value={search.category}
                onChange={(event) =>
                  onSearch({ ...search, category: event.target.value })
                }
              >
                <option value="">All</option>
                <option value="Groceries">Groceries</option>
                <option value="Housing">Housing</option>
                <option value="Insurance">Insurance</option>
              </Styled.SearchInputSelect>
            </Styled.FilterItem>
            <Styled.FilterItem>
              <label>Direction</label>
              <Styled.SearchInputSelect
                value={search.direction}
                onChange={(event) =>
                  onSearch({ ...search, direction: event.target.value })
                }
              >
                <option value="">All</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </Styled.SearchInputSelect>
            </Styled.FilterItem>
          </Styled.FilterContainer>
          <Styled.FilterContainer>
            <Styled.FilterItem>
              <label>Date Start</label>
              <Styled.SearchInput
                type="date"
                value={search.dateFrom}
                onChange={(event) =>
                  onSearch({ ...search, dateFrom: event.target.value })
                }
              />
            </Styled.FilterItem>
            <Styled.FilterItem>
              <label>Date End</label>
              <Styled.SearchInput
                type="date"
                value={search.dateTo}
                onChange={(event) =>
                  onSearch({ ...search, dateTo: event.target.value })
                }
              />
            </Styled.FilterItem>
          </Styled.FilterContainer>
          <Styled.FilterContainer>
            <Styled.FilterItem>
              <label>Amount From</label>
              <Styled.SearchInput
                type="number"
                placeholder="Search by Amount From"
                value={search.amountFrom}
                onChange={(event) =>
                  onSearch({ ...search, amountFrom: event.target.value })
                }
              />
            </Styled.FilterItem>
            <Styled.FilterItem>
              <label>Amount To</label>
              <Styled.SearchInput
                type="number"
                placeholder="Search by Amount To"
                value={search.amountTo}
                onChange={(event) =>
                  onSearch({ ...search, amountTo: event.target.value })
                }
              />
            </Styled.FilterItem>
            <Styled.FilterItem>
              <label>X</label>
              <Styled.FilterButton onClick={handleResetFilters}>
                Clear Filter
              </Styled.FilterButton>
            </Styled.FilterItem>
          </Styled.FilterContainer>
        </Styled.FilterBox>
      )}

      <Styled.SearchUl>
        {isSearchEntry &&
          filterTransactions().map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
      </Styled.SearchUl>
    </Styled.SearchContainer>
  );
}

export default SearchBar;
