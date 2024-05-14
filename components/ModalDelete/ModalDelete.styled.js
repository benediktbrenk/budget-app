import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Hintergrundfarbe mit Transparenz für Überlagerung */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Schatten für den Inhalt */
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
`;

export const ModalButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.cancel {
    background-color: #e0e0e0;
  }

  &.delete {
    background-color: #f44336;
    color: white;
  }
`;

export const HiddenModal = styled.div`
  display: none;
`;
