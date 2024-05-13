import { useRouter } from "next/router";
import * as Styled from "./Navigation.styled";
import { FaHouse, FaPlus, FaChartPie } from "react-icons/fa6";

function NavigationBar() {
  const router = useRouter();

 function isActive(path) {
   if (!path || path == undefined) {
     return;
   }
   return router.pathname === path;
 }

 return (
   <Styled.NavBar>
     <Styled.NavContainer>
       <Styled.NavLink
         key="home"
         onClick={() => router.push("/")}
         active={isActive("/").toString()}
       >
         <FaHouse />
       </Styled.NavLink>

       <Styled.NavLink
         key="newentry"
         onClick={() => router.push("/newentry")}
         active={isActive("/newentry").toString()}
       >
         <FaPlus />
       </Styled.NavLink>

       <Styled.NavLink
         key="reports"
         onClick={() => router.push("/reports")}
         active={isActive("/reports").toString()}
       >
         <FaChartPie />
       </Styled.NavLink>
     </Styled.NavContainer>
   </Styled.NavBar>
 );
}

export default NavigationBar;
