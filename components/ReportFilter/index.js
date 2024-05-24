import CategoryFilter from "../CategoryFilter";
import * as Styled from "./ReportFilter.styled";
import Modal from "../Modal";
import Calendar from "../Calendar";
import { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { categories } from "@/utils/categories";

export default function ReportFilter({ filter, onFilter }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState();

  function handleToggleOption(option) {
    if (
      filter.categories.some(
        (filteredCategory) => filteredCategory.name === option
      )
    ) {
      onFilter({
        ...filter,
        categories: filter.categories.filter(
          (category) => category.name !== option
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
        <Styled.FilterSegmentContainer>
          <Styled.FilterItem>
            {selectedTime ? (
              <>
                <Styled.FilterItem>
                  Period: {getFormattedDate(selectedTime.from)}
                  {selectedTime.to &&
                    selectedTime.from.toString() !==
                      selectedTime.to.toString() &&
                    ` - ${getFormattedDate(selectedTime.to)}`}
                </Styled.FilterItem>
              </>
            ) : (
              <Styled.FilterItem>Period: Total</Styled.FilterItem>
            )}
            <Styled.CalendarButton onClick={handleModal}>
              <LuCalendarDays />
            </Styled.CalendarButton>
          </Styled.FilterItem>
          <Styled.FilterItem>
            <label>Payment:</label>
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
        <CategoryFilter
          search={filter}
          onSelectCategory={handleToggleOption}
          onFilter={onFilter}
          mode="report"
        />
      </Styled.FilterContainer>
    </>
  );
}
