import { transactions } from "@/db/data";
import { StyledHeadline, StyledTable, StyledTableHeader } from "./Table.styled";

const getCategoryTotalAmount = (category) => {
  return transactions
    .filter((transaction) => transaction.category === category)
    .reduce((total, transaction) => total + transaction.amount, 0);
};

const categories = ["Groceries", "Salary", "Housing", "Insurance", "Utilities"];

const TableData = categories.map((category) => ({
  category,
  amount: getCategoryTotalAmount(category),
}));

export function DataTable() {
  return (
    <>
      <StyledHeadline>Expense Total</StyledHeadline>
      <StyledTable>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {TableData.map((dataItem, index) => (
            <tr key={index}>
              <td>{dataItem.category}</td>
              <td>{dataItem.amount}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}
