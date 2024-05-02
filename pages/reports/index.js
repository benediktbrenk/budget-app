import ArrowLeft from "@/components/ArrowLeft";
import { BarChart } from "@/components/BarChart";
import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";
import { PieChart } from "@/components/PieChart";
import TabMenu from "@/components/TabMenu";
import { DataTable } from "@/components/Table";

export default function ReportsPage({ transactions }) {
  const getCategoryTotalAmount = (category) => {
    return transactions
      .filter((transaction) => transaction.category === category)
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  const categories = [
    "Groceries",
    "Salary",
    "Housing",
    "Insurance",
    "Utilities",
  ];

  const data = categories.map((category) => ({
    category,
    amount: getCategoryTotalAmount(category),
  }));

  return (
    <>
      <StyledMain>
        <ArrowLeft></ArrowLeft>
        <Header title="Edit"></Header>
        <TabMenu data={data}></TabMenu>
      </StyledMain>
    </>
  );
}
