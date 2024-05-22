import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "../Button/Button.styled";
import { ButtonContainer } from "./Calendar.styled";
import { useState } from "react";

export default function Calendar({
  handleSelectDate,
  selectedTime,
  handleModal,
  getFormattedDate,
}) {
  const [month, setMonth] = useState(new Date());

  function goToToday() {
    const today = new Date();
    setMonth(today);
    handleSelectDate({ from: today, to: today });
  }

  return (
    <>
      <DayPicker
        mode="range"
        selected={selectedTime}
        onSelect={handleSelectDate}
        toDate={new Date()}
      />
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
      <ButtonContainer>
        <Button onClick={goToToday}>Today</Button>
        <Button disabled={!selectedTime} onClick={() => handleSelectDate()}>
          Reset
        </Button>
        <Button onClick={handleModal}>Ok</Button>
      </ButtonContainer>
    </>
  );
}
