import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-secondary);
  position: fixed;
  top: 10px;
  padding: 15px 15px 10px 15px;
  border-radius: var(--border-radius);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: var(--color-text);
`;
