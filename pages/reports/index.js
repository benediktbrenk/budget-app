import ArrowLeft from "@/components/ArrowLeft";
import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";
import ReportFilter from "@/components/ReportFilter";
import TabMenu from "@/components/TabMenu";
import { useState } from "react";

export default function ReportsPage({ transactions }) {
  const categories = [
    "Groceries",
    "Salary",
    "Housing",
    "Insurance",
    "Utilities",
  ];

  const [filter, setFilter] = useState({
    categories: categories,
    dateFrom: "",
    dateTo: "",
    paymentMethod: "",
  });

  const filteredTransactions = transactions.filter((transaction) => {
    const dateFrom = filter.dateFrom ? new Date(filter.dateFrom) : null;
    const dateTo = filter.dateTo ? new Date(filter.dateTo) : null;
    const transactionDate = new Date(transaction.date);

    const dateMatches =
      !dateFrom ||
      !dateTo ||
      (transactionDate >= dateFrom && transactionDate <= dateTo);

    const paymentMethodMatches =
      filter.paymentMethod === "" ||
      transaction.paymentMethod.toLowerCase() ===
        filter.paymentMethod.toLowerCase();

    return dateMatches && paymentMethodMatches;
  });

  return (
    <>
      <StyledMain>
        <ArrowLeft></ArrowLeft>
        <Header title="Edit"></Header>
        <ReportFilter
          filter={filter}
          setFilter={setFilter}
          categories={categories}
        ></ReportFilter>
        <TabMenu
          filter={filter}
          filteredTransactions={filteredTransactions}
        ></TabMenu>
      </StyledMain>
    </>
  );
}
