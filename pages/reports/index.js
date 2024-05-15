import ReportFilter from "@/components/ReportFilter";
import TabMenu from "@/components/Report";
import { useState } from "react";
import { categories } from "@/utils/categories";

export default function ReportsPage({ transactions }) {
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
    const direction = transaction.direction;

    const dateMatches =
      !dateFrom ||
      !dateTo ||
      (transactionDate >= dateFrom && transactionDate <= dateTo);

    const paymentMethodMatches =
      filter.paymentMethod === "" ||
      transaction.paymentMethod.toLowerCase() ===
        filter.paymentMethod.toLowerCase();

    const directionExpense = direction === "Expense";

    return dateMatches && paymentMethodMatches && directionExpense;
  });

  return (
    <>
      <ReportFilter
        filter={filter}
        setFilter={setFilter}
        categories={categories}
      ></ReportFilter>
      <TabMenu
        filter={filter}
        filteredTransactions={filteredTransactions}
      ></TabMenu>
    </>
  );
}
