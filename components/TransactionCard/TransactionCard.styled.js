import styled from "styled-components";
import Link from "next/link";

export const StyledLi = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: lightgray;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
