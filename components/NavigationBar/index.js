import { useRouter } from "next/router";
import * as Styled from "./Navigation.styled";
import { FaHouse, FaPlus, FaChartPie } from "react-icons/fa6";

function NavigationBar() {
  const router = useRouter();

  function isActive(path) {
    return router.pathname === path;
  }

  return (
    <Styled.NavBar>
      <Styled.NavContainer>
        <Styled.NavLink href="/" $active={isActive("/")}>
          <FaHouse />
        </Styled.NavLink>

        <Styled.NavLink href="/newentry" $active={isActive("/newentry")}>
          <FaPlus />
        </Styled.NavLink>

        <Styled.NavLink href="/reports" $active={isActive("/reports")}>
          <FaChartPie />
        </Styled.NavLink>
      </Styled.NavContainer>
    </Styled.NavBar>
  );
}

export default NavigationBar;
