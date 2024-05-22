import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 25px;
  width: 100%;
  min-width: 325px;

  border: 1px solid lightgray;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  background: rgb(72, 147, 233);
  background: linear-gradient(
    180deg,
    rgba(72, 147, 233, 1) 0%,
    rgba(44, 85, 191, 1) 84%,
    rgba(20, 68, 190, 1) 100%
  );

  color: white;
  text-align: center;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 20px;
  padding: 25px;
  max-width: 900px;
`;

export const FeatureSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 500px;

  text-align: center;
`;
