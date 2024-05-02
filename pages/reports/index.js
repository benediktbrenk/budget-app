import ArrowLeft from "@/components/ArrowLeft";
import { BarChart } from "@/components/BarChart";
import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";
import { PieChart } from "@/components/PieChart";
import { DataTable } from "@/components/Table";

export default function ReportsPage() {
  return (
    <>
      <StyledMain>
        <ArrowLeft></ArrowLeft>
        <Header title="Edit"></Header>
        <BarChart></BarChart>
        <PieChart></PieChart>
        <DataTable></DataTable>
      </StyledMain>
    </>
  );
}
