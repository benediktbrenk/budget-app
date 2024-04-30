import TransactionCard from "../TransactionCard/index";
import {
  StyledSearchContainer,
  StyledSearchForm,
  StyledSearchInput,
  StyledSearchUl,
} from "./SearchBar.styled";

function SearchBar({ transactions, search, onSearch }) {
  return (
    <StyledSearchContainer>
      <StyledSearchForm>
        <label>Search</label>
        <StyledSearchInput
          type="search"
          placeholder="Search transactions..."
          onChange={(event) => onSearch(event.target.value)}
        />
      </StyledSearchForm>
      <StyledSearchUl>
        {transactions.map((transaction) => {
          if (transaction.name !== search) {
            return;
          }
          if (transaction.name === search) {
            return (
              <TransactionCard key={transaction.id} transaction={transaction} />
            );
          }
        })}
      </StyledSearchUl>
    </StyledSearchContainer>
  );
}

export default SearchBar;
