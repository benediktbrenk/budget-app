import React from "react";
import * as Styled from "./Modal.styled.js";

function Modal({ showModal, children }) {
  return (
    <>
      {showModal && (
        <Styled.ModalContainer>
          <Styled.ModalContent>{children}</Styled.ModalContent>
        </Styled.ModalContainer>
      )}
    </>
  );
}

export default Modal;
