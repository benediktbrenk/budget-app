import Header from "@/components/Header";
import { Main } from "@/components/Main/Main.styled";
import NavigationBar from "@/components/NavigationBar";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Budget App" />
      <Main>{children}</Main>
      <NavigationBar />
    </>
  );
}
