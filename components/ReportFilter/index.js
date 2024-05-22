import CategoryFilter from "../CategoryFilter";
import { Button } from "../Button/Button.styled";
import * as Styled from "./ReportFilter.styled";
import Modal from "../Modal";
import Calendar from "../Calendar";
import { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { categories } from "@/utils/categories";

export default function ReportFilter({ filter, onFilter }) {
  const [selectedTime, setSelectedTime] = useState();
  const [showModal, setShowModal] = useState(false);

  function handleResetFilters() {
    onFilter({
      categories: [],
      dateFrom: null,
      dateTo: null,
      paymentMethod: "",
    });
  }

  function handleToggleOption(option) {
    if (
      filter.categories.some(
        (filteredCategory) => filteredCategory.name === option,
      )
    ) {
      onFilter({
        ...filter,
        categories: filter.categories.filter(
          (category) => category.name !== option,
        ),
      });
    } else {
      onFilter({
        ...filter,
        categories: [
          ...filter.categories,
          categories.find((category) => category.name === option),
        ],
      });
    }
  }

  function handleSelectDate(selectedRange) {
    setSelectedTime(selectedRange);
    onFilter({
      ...filter,
      dateFrom: selectedRange?.from?.setHours(0, 0, 0, 0) || null,
      dateTo: selectedRange?.to?.setHours(0, 0, 0, 0) || null,
    });
  }

  function handleModal() {
    setShowModal(!showModal);
  }

  function getFormattedDate(selectedDate) {
    const date = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(selectedDate);

    return date;
  }

  return (
    <>
      <Modal showModal={showModal}>
        <Calendar
          handleSelectDate={handleSelectDate}
          selectedTime={selectedTime}
          handleModal={handleModal}
          getFormattedDate={getFormattedDate}
        />
      </Modal>
      <Styled.FilterContainer>
        <CategoryFilter search={filter} onSelectCategory={handleToggleOption} />
        <Styled.FilterSegmentContainer>
          <Styled.FilterItem>
            {selectedTime ? (
              <p>
                Your Selection:
                <br />
                <br />
                {getFormattedDate(selectedTime.from)}
                {selectedTime.to &&
                  selectedTime.from.toString() !== selectedTime.to.toString() &&
                  ` - ${getFormattedDate(selectedTime.to)}`}
              </p>
            ) : (
              <p>Select a single date or a range of dates</p>
            )}
          </Styled.FilterItem>
          <Styled.FilterItem>
            <Button onClick={handleModal}>
              <LuCalendarDays />
            </Button>
          </Styled.FilterItem>
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
          <Styled.FilterItem>
            <Button onClick={handleResetFilters}>Clear Filter</Button>
          </Styled.FilterItem>
        </Styled.FilterSegmentContainer>
      </Styled.FilterContainer>
    </>
  );
}
