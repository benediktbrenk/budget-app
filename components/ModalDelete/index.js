import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalButton,
  HiddenModal,
} from "./ModalDelete.styled.js";

function ModalDelete({ showModal, setShowModal, id }) {
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
            <ModalButton onClick={() => setShowModal(false)} className="cancel">
              Cancel
            </ModalButton>
            <ModalButton onClick={handleDelete} className="delete">
              Delete
            </ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  );
}

export default ModalDelete;
