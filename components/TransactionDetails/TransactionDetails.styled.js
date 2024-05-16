const { default: styled } = require("styled-components");

export const DetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #f5f6f6;
  padding: 15px 0 0 35px;
  margin: 20px 0;
  border-radius: 0.75rem;
  min-width: 250px;
  max-width: 300px;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 2%;
    left: 10px;
    width: 17px;
    height: 96%;
    background-color: lightblue;
    border-radius: 6px;
  }
`;

export const ItemContainer = styled.div`
  font-size: 1.1rem;
  gap: 0.2rem;
`;

export const ItemText = styled.p`
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  color: darkgrey;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0 0.5rem 0 0.5rem;
  margin-top: 0.5rem;
  margin-right: 0.9rem;
`;

export const FrontCard = styled.div`
  transition: transform 0.8s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

export const BackCard = styled.div`
  position: absolute;
  top: 60px;
  transform: rotateY(180deg);
  transition: transform 0.8s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  width: 300px;
  height: 300px;
  background-color: blue;
`;
