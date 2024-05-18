import CategoryFilter from "../CategoryFilter";
import { Button } from "../Button/Button.styled";
import * as Styled from "./ReportFilter.styled";

export default function ReportFilter({ filter, onFilter }) {
  function handleResetFilters() {
    onFilter({
      categories: [],
      dateFrom: "",
      dateTo: "",
      paymentMethod: "",
    });
  }

  function handleToggleOption(option) {
    if (filter.categories.includes(option)) {
      onFilter({
        ...filter,
        categories: filter.categories.filter((category) => category !== option),
      });
    } else {
      onFilter({
        ...filter,
        categories: [...filter.categories, option],
      });
    }
  }

  return (
    <Styled.FilterContainer>
      <Styled.FilterSegmentContainer style={{ "--flex-direction": "column" }}>
        <CategoryFilter search={filter} onSelectCategory={handleToggleOption} />
      </Styled.FilterSegmentContainer>
      <Styled.FilterSegmentContainer>
        <Styled.FilterItem>
          <label>Payment Method</label>
          <Styled.FilterInputSelect
            value={filter.paymentMethod}
            onChange={(event) =>
              onFilter({ ...filter, paymentMethod: event.target.value })
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
              onFilter({ ...filter, dateFrom: event.target.value })
            }
          />
        </Styled.FilterItem>
        <Styled.FilterItem>
          <label>Date End</label>
          <Styled.FilterInput
            type="date"
            value={filter.dateTo}
            onChange={(event) =>
              onFilter({ ...filter, dateTo: event.target.value })
            }
          />
        </Styled.FilterItem>
        <Styled.FilterItem>
          <Button onClick={handleResetFilters}>Clear Filter</Button>
        </Styled.FilterItem>
      </Styled.FilterSegmentContainer>
    </Styled.FilterContainer>
  );
}
