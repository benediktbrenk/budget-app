import TransactionCard from "../TransactionCard/index";
import {
  StyledFilterContainer,
  StyledFilterItem,
  StyledSearchContainer,
  StyledSearchForm,
  StyledSearchInput,
  StyledSearchInputSelect,
  StyledSearchUl,
} from "./SearchBar.styled";

function SearchBar({ transactions, search, onSearch }) {
  const filterTransactions = () => {
    return transactions.filter((transaction) => {
      // Suche nach Name, Datum, Kategorie und Betrag
      return (
        transaction.name.toLowerCase().includes(search.toLowerCase()) ||
        transaction.date.includes(search) ||
        transaction.category.toLowerCase().includes(search.toLowerCase()) ||
        transaction.amount.toString().includes(search)
      );
    });
  };

  return (
    <StyledSearchContainer>
      <StyledSearchForm>
        <label>Search</label>
        <StyledSearchInput
          type="search"
          placeholder="Search Transactions..."
          onChange={(event) => onSearch(event.target.value)}
        />
        <StyledFilterContainer>
          <StyledFilterItem>
            <label>Date</label>
            <StyledSearchInput
              type="date"
              placeholder="Search by date..."
              onChange={(event) => onSearch(event.target.value)}
            />
          </StyledFilterItem>
          <StyledFilterItem>
            <label>Category</label>
            <StyledSearchInputSelect
              onChange={(event) => onSearch(event.target.value)}
            >
              <option value="">All</option>
              <option value="Groceries">Groceries</option>
              <option value="Housing">Housing</option>
              <option value="Insurance">Insurance</option>
              <option value="Others">Others</option>
            </StyledSearchInputSelect>
          </StyledFilterItem>
        </StyledFilterContainer>
      </StyledSearchForm>
      <StyledSearchUl>
        {filterTransactions().map((transaction) => {
          return search == "" ? (
            <></>
          ) : (
            <TransactionCard key={transaction.id} transaction={transaction} />
          );
        })}
      </StyledSearchUl>
    </StyledSearchContainer>
  );
}

export default SearchBar;
