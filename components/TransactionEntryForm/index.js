import { StyledMain } from "../Main/Main.styled";
import {
  StyledFormContainer,
  StyledFormField,
  StyledFormButton,
} from "./TransactionEntryForm.styled";
import { useRouter } from "next/router";

function TransactionEntryForm({
  updateTransactions,
  id,
  currentTransaction,
  mode,
}) {
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    updateTransactions(data, id);
    event.target.reset();
    router.push("/");
  }
  return (
    <StyledMain>
      <form onSubmit={handleSubmit}>
        <StyledFormContainer>
          <StyledFormField>
            <label htmlFor="direction">Direction</label>
            <select
              type="text"
              name="direction"
              required
              defaultValue={
                mode === "add" ? "Default" : currentTransaction.direction
              }
            >
              <option value="Default">--Select Option--</option>
              <option value="Expense">Expense</option>
              <option value="Income">Income</option>
            </select>
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="name">Title</label>
            <input
              type="text"
              name="name"
              maxLength={20}
              required
              defaultValue={mode === "add" ? "" : currentTransaction.name}
            />
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              max={999999}
              min={0}
              required
              defaultValue={mode === "add" ? "" : currentTransaction.amount}
            />
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="currency">Currency</label>
            <select
              type="text"
              name="currency"
              required
              defaultValue={
                mode === "add" ? "Default" : currentTransaction.currency
              }
            >
              <option value="Default">--Select Option--</option>
              <option value="€">€</option>
              <option value="$">$</option>
            </select>
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              required
              defaultValue={mode === "add" ? "" : currentTransaction.date}
            />
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="payment_method">Payment Method</label>
            <select
              type="text"
              name="payment_method"
              required
              defaultValue={
                mode === "add" ? "" : currentTransaction.paymentMethod
              }
            >
              <option value="Default">--Select Option--</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
            </select>
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="category">Category</label>
            <select
              type="text"
              name="category"
              required
              defaultValue="Groceries"
            >
              <option value="Groceries">Groceries</option>
              <option value="Salary">Salary</option>
              <option value="Housing">Housing</option>
              <option value="Insurance">Insurance</option>
              <option value="Utilities">Utilities</option>
            </select>
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="description">Description</label>
            <textarea
              rows="7"
              maxLength={140}
              type="text"
              name="description"
              defaultValue={
                mode === "add" ? "" : currentTransaction.description
              }
            />
          </StyledFormField>
          <StyledFormButton>
            <button type="submit">Submit</button>
          </StyledFormButton>
        </StyledFormContainer>
      </form>
    </StyledMain>
  );
}

export default TransactionEntryForm;
