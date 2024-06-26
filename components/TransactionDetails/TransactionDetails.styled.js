import styled from "styled-components";

export const DetailsContainer = styled.div``;

export const DetailsCard = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$softColor || "#CCCCCC"};
  padding: 15px 0 0 35px;
  margin: 20px 0;
  border-radius: var(--border-radius);
  min-width: 325px;
  max-width: 500px;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 2%;
    left: 10px;
    width: 17px;
    height: 96%;
    background-color: ${(props) => props.$color || "#CCCCCC"};
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
  color: var(--color-text);
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

export const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
`;

export const ModalButton = styled.button`
  margin: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
