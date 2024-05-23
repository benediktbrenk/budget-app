import ReportFilter from "@/components/ReportFilter";
import { Report } from "@/components/Report";
import { useState } from "react";
import { categories } from "@/utils/categories";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ReportsPage({ transactions }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [filter, setFilter] = useState({
    categories: categories.map((category) => category.name),
    dateFrom: null,
    dateTo: null,
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
    const { dateFrom, dateTo } = filter;
    const transactionDate = new Date(transaction.date).setHours(0, 0, 0, 0);
    const direction = transaction.direction;

    const dateMatches =
      (!dateFrom && !dateTo) ||
      (!dateTo && transactionDate === dateFrom) ||
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
      <Report
        filter={filter}
        filteredTransactions={filteredTransactions}
        transactions={transactions}
      />
    </>
  );
}
