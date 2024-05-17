import ReportFilter from "@/components/ReportFilter";
import TabMenu from "@/components/Report";
import { useState } from "react";
import { categories } from "@/utils/categories";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ReportsPage({ transactions }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [filter, setFilter] = useState({
    categories: categories.map((category) => category.name),
    dateFrom: "",
    dateTo: "",
    paymentMethod: "",
  });

  function handleReportFilter(filterEntry) {
    setFilter(filterEntry);
  }

  if (!session && status !== "authenticated") {
    router.push("/login");
    return;
  }

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
      transaction.paymentMethod?.toLowerCase() ===
        filter.paymentMethod?.toLowerCase();

    const directionExpense = direction === "Expense";

    return dateMatches && paymentMethodMatches && directionExpense;
  });

  return (
    <>
      <ReportFilter filter={filter} onFilter={handleReportFilter} />
      <TabMenu filter={filter} filteredTransactions={filteredTransactions} />
    </>
  );
}
