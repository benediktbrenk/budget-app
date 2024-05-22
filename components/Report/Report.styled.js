import styled from "styled-components";

const doubledBorder = "30px";
const minimalDeviceWidth = "600px";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    width: min(
    calc(100% - ${doubledBorder}),
    calc(${minimalDeviceWidth} - ${doubledBorder})
  );
`;

export const Headline = styled.h2`
margin-top: 20px;
padding: 10px;
font: 700 22px/20px var(--font-family);
border: 1px solid #ccc;
border-radius: var(--border-radius);
`;

export const ContentHeadline = styled.h2`
  margin: 0 0 20px 0;
  font: 700 16px/18px var(--font-family);
`;

export const TabContent = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #ccc;
  height: 350px;
  font-family: var(--font-family);
`;
