import { useRouter } from "next/router";
import * as Styled from "./Navigation.styled";
import { FaHouse, FaPlus, FaChartPie } from "react-icons/fa6";
import LoginButton from "../LoginButton";
import Logo from "../Logo";
import Image from "next/image";

function NavigationBar() {
  const router = useRouter();

  function isActive(path) {
    return router.pathname === path;
  }

  return (
    <Styled.NavBar>
      <Styled.LogoContainer>
        <Image
          width={70}
          height={50}
          alt="app-logo"
          src="/assets/expenso-logo-bunte-karten.png"
        />
      </Styled.LogoContainer>
      <Styled.ProfileAvatar>
        <LoginButton />
      </Styled.ProfileAvatar>

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
