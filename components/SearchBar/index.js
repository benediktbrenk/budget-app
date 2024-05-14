import { useState } from "react";
import * as Styled from "./SearchBar.styled";
import { FaArrowsRotate, FaSliders } from "react-icons/fa6";
import CategoryFilter from "../CategoryFilter";

function SearchBar({ search, onSearch, handleCategoryFilter }) {
	const [searchNameValue, setSearchNameValue] = useState(search.name);
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

	function handleKeyDown(event) {
		if (event.key === " " && event.target.selectionStart === 0) {
			event.preventDefault();
		}
	}

	function handleSearchChange(event) {
		const trimmedValue = event.target.value.trimStart();
		setSearchNameValue(trimmedValue);
		onSearch({ ...search, name: trimmedValue });
		if (trimmedValue === "") {
			handleResetFilters();
		}
	}

	return (
		<Styled.SearchContainer>
			<Styled.SearchAndFilter>
				<Styled.SearchInput
					type="search"
					id="search"
					placeholder="Search Transactions..."
					pattern="^(?!.*\s{2,}).+$"
					value={searchNameValue}
					onChange={(event) => handleSearchChange(event)}
					onKeyDown={(event) => handleKeyDown(event)}
					maxLength={30}
				/>
				<Styled.FilterButton
					onClick={() => setIsFilter((isFilter) => !isFilter)}
				>
					<FaSliders />
				</Styled.FilterButton>
			</Styled.SearchAndFilter>
			<CategoryFilter search={search} onClick={handleCategoryFilter} />
			{isFilter && (
				<Styled.FilterBox>
					<Styled.FilterContainer>
						<Styled.FilterItem>
							<label for="direction">Direction</label>
							<Styled.SearchInputSelect
								value={search.direction}
								id="direction"
								onChange={(event) => {
									onSearch({ ...search, direction: event.target.value });
								}}
							>
								<option value="">All</option>
								<option value="Income">Income</option>
								<option value="Expense">Expense</option>
							</Styled.SearchInputSelect>
						</Styled.FilterItem>
					</Styled.FilterContainer>
					<Styled.FilterContainer>
						<Styled.FilterItem>
							<label for="date_start">Date Start</label>
							<Styled.SearchInput
								type="date"
								id="date_start"
								value={search.dateFrom}
								onChange={(event) =>
									onSearch({ ...search, dateFrom: event.target.value })
								}
							/>
						</Styled.FilterItem>
						<Styled.FilterItem>
							<label for="date_end">Date End</label>
							<Styled.SearchInput
								type="date"
								id="date_end"
								value={search.dateTo}
								onChange={(event) =>
									onSearch({ ...search, dateTo: event.target.value })
								}
							/>
						</Styled.FilterItem>
					</Styled.FilterContainer>
					<Styled.FilterContainer>
						<Styled.FilterItem>
							<label for="amount_from">Amount From</label>
							<Styled.SearchInput
								type="number"
								id="amount_from"
								placeholder="Search by Amount From"
								value={search.amountFrom}
								onChange={(event) =>
									onSearch({ ...search, amountFrom: event.target.value })
								}
							/>
						</Styled.FilterItem>
						<Styled.FilterItem>
							<label for="amount_to">Amount To</label>
							<Styled.SearchInput
								type="number"
								id="amount_to"
								placeholder="Search by Amount To"
								value={search.amountTo}
								onChange={(event) =>
									onSearch({ ...search, amountTo: event.target.value })
								}
							/>
						</Styled.FilterItem>
						<Styled.FilterItem>
							<label for="clear">clear</label>
							<Styled.FilterButton id="clear" onClick={handleResetFilters}>
								<FaArrowsRotate />
							</Styled.FilterButton>
						</Styled.FilterItem>
					</Styled.FilterContainer>
				</Styled.FilterBox>
			)}
		</Styled.SearchContainer>
	);
}

export default SearchBar;
