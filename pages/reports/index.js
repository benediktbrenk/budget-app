import ArrowLeft from "@/components/ArrowLeft";
import { BarChart } from "@/components/BarChart";
import Header from "@/components/Header";
import { StyledMain } from "@/components/Main/Main.styled";

export default function ReportsPage() {
  return (
    <>
      <StyledMain>
        <ArrowLeft></ArrowLeft>
        <Header title="Edit"></Header>
        <BarChart></BarChart>
      </StyledMain>
    </>
  );
}
