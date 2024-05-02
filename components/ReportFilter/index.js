import {
  FilterButton,
  FilterContainer,
  FilterInput,
  FilterInputCheckbox,
  FilterInputSelect,
  FilterItem,
  FilterSegmentContainer,
  StyledSearchInput,
} from "./ReportFilter.styled";

export default function ReportFilter({ filter, setFilter, categories }) {
  function handleResetFilters() {
    setFilter({
      categories: [],
      dateFrom: "",
      dateTo: "",
      paymentMethod: "",
    });
  }

  function handleToggleOption(option) {
    if (filter.categories.includes(option)) {
      setFilter({
        ...filter,
        categories: filter.categories.filter((category) => category !== option),
      });
    } else {
      setFilter({
        ...filter,
        categories: [...filter.categories, option],
      });
    }
  }

  return (
    <FilterContainer>
      <FilterSegmentContainer style={{ "--flex-direction": "column" }}>
        <label>Category</label>
        <FilterItem style={{ "--flex-direction": "row" }}>
          {categories.map((category) => (
            <label key={category}>
              <FilterInputCheckbox
                type="checkbox"
                value={category}
                checked={filter.categories.includes(category)}
                onChange={() => handleToggleOption(category)}
              />
              {category}
            </label>
          ))}
        </FilterItem>
      </FilterSegmentContainer>
      <FilterSegmentContainer>
        <FilterItem>
          <label>Payment Method</label>
          <FilterInputSelect
            value={filter.paymentMethod}
            onChange={(event) =>
              setFilter({ ...filter, paymentMethod: event.target.value })
            }
          >
            <option value="">All</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </FilterInputSelect>
        </FilterItem>
      </FilterSegmentContainer>
      <FilterSegmentContainer>
        <FilterItem>
          <label>Date Start</label>
          <FilterInput
            type="date"
            value={filter.dateFrom}
            onChange={(event) =>
              setFilter({ ...filter, dateFrom: event.target.value })
            }
          />
        </FilterItem>
        <FilterItem>
          <label>Date End</label>
          <FilterInput
            type="date"
            value={filter.dateTo}
            onChange={(event) =>
              setFilter({ ...filter, dateTo: event.target.value })
            }
          />
        </FilterItem>
        <FilterItem>
          <FilterButton onClick={handleResetFilters}>Clear Filter</FilterButton>
        </FilterItem>
      </FilterSegmentContainer>
    </FilterContainer>
  );
}
