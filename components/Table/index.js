import * as Styled from "./Table.styled";

export function DataTable({ TableData }) {
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
          {TableData.map((dataItem, index) => (
            <tr key={index}>
              <td>{dataItem.category}</td>
              <td>{dataItem.amount}</td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </>
  );
}
