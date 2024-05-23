import styled from "styled-components";
import Link from "next/link";

export const DropDownConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid lightgray;
  border-radius: 12px;
  padding: 15px;
  background-color: white;
  width: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  height: 100px;

  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 100;

  /* &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: 20px;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: white;
    border-left: 1px solid lightgray;
    border-top: 1px solid lightgray;
  } */

  @media (min-width: 500px) {
    right: 20px;
  }

  @media (min-width: 1100px) {
    left: 90px;
  }
`;

export const DropDownUl = styled.ul`
  list-style-type: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const DropDownLi = styled.li`
  list-style-type: none;
  text-decoration: none;
`;

export const Divider = styled.hr`
  width: 100%;
  text-align: left;
  margin-left: 0;
  color: var(--lightgrey);
  background-color: var(--lightgrey);
`;

export const SignButton = styled.button`
  padding: 5px 15px;
  text-decoration: none;
  text-align: center;
  height: 30px;
  color: black;
  background-color: royalblue;
  border-radius: 6px;
  border: none;
  font-weight: 700;
  color: white;
  width: 100%;

  &:hover {
    //background-color: blue;
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const DropDownLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: black;
  }

  &:hover {
    color: grey;
  }
`;
