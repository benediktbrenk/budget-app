import CategoryFilter from "../CategoryFilter";
import * as Styled from "./ReportFilter.styled";

export default function ReportFilter({ filter, setFilter }) {
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
    <Styled.FilterContainer>
      <Styled.FilterSegmentContainer style={{ "--flex-direction": "column" }}>
        <CategoryFilter search={filter} onClick={handleToggleOption} />
      </Styled.FilterSegmentContainer>
      <Styled.FilterSegmentContainer>
        <Styled.FilterItem>
          <label>Payment Method</label>
          <Styled.FilterInputSelect
            value={filter.paymentMethod}
            onChange={(event) =>
              setFilter({ ...filter, paymentMethod: event.target.value })
            }
          >
            <option value="">All</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </Styled.FilterInputSelect>
        </Styled.FilterItem>
      </Styled.FilterSegmentContainer>
      <Styled.FilterSegmentContainer>
        <Styled.FilterItem>
          <label>Date Start</label>
          <Styled.FilterInput
            type="date"
            value={filter.dateFrom}
            onChange={(event) =>
              setFilter({ ...filter, dateFrom: event.target.value })
            }
          />
        </Styled.FilterItem>
        <Styled.FilterItem>
          <label>Date End</label>
          <Styled.FilterInput
            type="date"
            value={filter.dateTo}
            onChange={(event) =>
              setFilter({ ...filter, dateTo: event.target.value })
            }
          />
        </Styled.FilterItem>
        <Styled.FilterItem>
          <Styled.FilterButton onClick={handleResetFilters}>
            Clear Filter
          </Styled.FilterButton>
        </Styled.FilterItem>
      </Styled.FilterSegmentContainer>
    </Styled.FilterContainer>
  );
}
