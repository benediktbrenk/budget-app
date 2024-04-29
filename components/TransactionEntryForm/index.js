import Header from "../Header";
import ArrowLeft from "@/components/ArrowLeft";

function TransactionEntryForm({ onSubmit }) {
  return (
    <main>
      <Header title="Add New Transaction" />
      <ArrowLeft />
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label htmlFor="direction">Direction</label>
            <select type="text" name="direction">
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Title</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="amounmt">Amount</label>
            <input type="number" name="amount" />
          </div>
          <div>
            <label htmlFor="amounmt">Currency</label>
            <select type="text" name="currency">
              <option value="€">€</option>
              <option value="$">$</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Discription</label>
            <input type="date" name="date" />
          </div>
          <div>
            <label htmlFor="payment_method">Payment Method</label>
            <select type="text" name="payment_method">
              <option value="cash">Cash</option>
              <option value="card">Card</option>
            </select>
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select type="text" name="category">
              <option value="grocery">Grocery</option>
              <option value="salary">Salary</option>
              <option value="housing">Housing</option>
              <option value="insurance">Insurance</option>
              <option value="utilities">Utilities</option>
            </select>
          </div>
          <div>
            <label htmlFor="description">Discription</label>
            <textarea rows="4" type="text" name="description" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default TransactionEntryForm;
