import React from "react";
import * as Styled from "./ModalDelete.styled.js";

function ModalDelete({ showModal, setShowModal, id, deleteTransaction }) {
  function handleDelete() {
    deleteTransaction(id);
    setShowModal(false);
  }

  return (
    <div>
      {showModal && (
        <Styled.ModalContainer>
          <Styled.ModalContent>
            <Styled.ModalTitle>Do you really want to delete?</Styled.ModalTitle>
            <Styled.ModalButton onClick={() => setShowModal(false)}>
              Cancel
            </Styled.ModalButton>
            <Styled.ModalButton onClick={handleDelete}>
              Delete
            </Styled.ModalButton>
          </Styled.ModalContent>
        </Styled.ModalContainer>
      )}
    </div>
  );
}

export default ModalDelete;
