import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  height: 300px;
  border-collapse: collapse;
  color: var(--color-text);

  th,
  td {
    border: 1px solid var(--color-border);
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: var(--color-secondary);
  }

  tr {
    background-color: var(--color-table);
  }

  tr:hover {
    background-color: #e9e9e9;
  }
`;
