import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Transactions" />
      <main>{children}</main>
      <NavigationBar />
    </>
  );
}
