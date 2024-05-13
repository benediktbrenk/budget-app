import GlobalButton from "../GlobalButton";
import * as Styled from "./ReportFilter.styled";

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
    <Styled.FilterContainer>
      <Styled.FilterSegmentContainer style={{ "--flex-direction": "column" }}>
        <label>Category</label>
        <Styled.FilterItem style={{ "--flex-direction": "row" }}>
          {categories.map((category) => (
            <label key={category}>
              <Styled.FilterInputCheckbox
                type="checkbox"
                value={category}
                checked={filter.categories.includes(category)}
                onChange={() => handleToggleOption(category)}
              />
              {category}
            </label>
          ))}
        </Styled.FilterItem>
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
          <GlobalButton onClick={handleResetFilters} name="Clear Filter" />
        </Styled.FilterItem>
      </Styled.FilterSegmentContainer>
    </Styled.FilterContainer>
  );
}
