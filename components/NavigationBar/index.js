import * as Styled from "./Navigation.styled";
import { FaHouse, FaPlus, FaChartPie } from "react-icons/fa6";

function NavigationBar() {
  return (
    <Styled.NavBar>
      <Styled.NavLink href="/">
        <FaHouse />
      </Styled.NavLink>
      <Styled.NavLink href="/newentry">
        <FaPlus />
      </Styled.NavLink>
      <Styled.NavLink href="/reports">
        <FaChartPie />
      </Styled.NavLink>
    </Styled.NavBar>
  );
}

export default NavigationBar;
