import * as Styled from "./TabMenu.styled.js";

export default function TabMenu({ handleActiveTab }) {
  return (
    <Styled.TabContainer>
      <Styled.TabButton
        $position="left"
        onClick={() => handleActiveTab("BarChart")}
      >
        BarChart
      </Styled.TabButton>
      <Styled.TabButton onClick={() => handleActiveTab("PieChart")}>
        Table
      </Styled.TabButton>
      <Styled.TabButton
        $position="right"
        onClick={() => handleActiveTab("Table")}
      >
        PieChart
      </Styled.TabButton>
    </Styled.TabContainer>
  );
}
