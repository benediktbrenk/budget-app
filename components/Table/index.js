import * as Styled from "./Table.styled";

export function DataTable({ tableData }) {
  const formattedTableData = tableData.map((category) => ({
    ...category,
    amount: new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(category.amount),
  }));

  return (
    <>
      <Styled.Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {formattedTableData.map((category) => (
            <tr key={category.category}>
              <td>{category.category}</td>
              <td>{category.amount}</td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </>
  );
}
