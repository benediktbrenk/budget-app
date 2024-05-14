import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalButton,
} from "./ModalDelete.styled.js";

function ModalDelete({ showModal, setShowModal, id, deleteTransaction }) {
  function handleDelete() {
    deleteTransaction(id);
    setShowModal(false);
  }

  return (
    <div>
      {showModal && (
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Do you really want to delete?</ModalTitle>
            <ModalButton onClick={() => setShowModal(false)}>
              Cancel
            </ModalButton>
            <ModalButton onClick={handleDelete}>Delete</ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  );
}

export default ModalDelete;
