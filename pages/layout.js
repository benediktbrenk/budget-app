import Header from "@/components/Header";
import { Main } from "@/components/Main/Main.styled";
import NavigationBar from "@/components/NavigationBar";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  return (
    <>
      <div id="scroll-to-top" />
      <Header title="Budget App" />
      <Main>{children}</Main>
      <ToastContainer autoClose={2000} />
      <NavigationBar />
    </>
  );
}
