import Header from "../Header";
import ArrowLeft from "@/components/ArrowLeft";
import { StyledMain } from "../Main/Main.styled";
import {
  StyledFormContainer,
  StyledFormField,
  StyledFormButton,
} from "./TransactionEntryForm.styled";

function TransactionEntryForm({ onSubmit }) {
  return (
    <StyledMain>
      <ArrowLeft />
      <Header title="New Transaction" />

      <form onSubmit={onSubmit}>
        <StyledFormContainer>
          <StyledFormField>
            <label htmlFor="direction">Direction</label>
            <select type="text" name="direction" required>
              <option value="Expense">Expense</option>
              <option value="Income">Income</option>
            </select>
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="name">Title</label>
            <input type="text" name="name" maxLength={20} required />
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" max={999999} required />
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="currency">Currency</label>
            <select type="text" name="currency" required>
              <option value="€">€</option>
              <option value="$">$</option>
            </select>
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" required />
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="payment_method">Payment Method</label>
            <select type="text" name="payment_method" required>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
            </select>
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="category">Category</label>
            <select type="text" name="category" required>
              <option value="groceries">Groceries</option>
              <option value="salary">Salary</option>
              <option value="housing">Housing</option>
              <option value="insurance">Insurance</option>
              <option value="utilities">Utilities</option>
            </select>
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="description">Description</label>
            <textarea rows="7" maxLength={140} type="text" name="description" />
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
