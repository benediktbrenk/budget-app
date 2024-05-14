import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalButton,
  HiddenModal,
} from "./ModalDelete.styled.js";

function ModalDelete({ showModal, setShowModal, deleteTransaction, id }) {
  function handleDelete() {
    deleteTransaction(id);
    setShowModal(false);
  }

  return (
    <div>
      {showModal && (
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Willst du wirklich löschen?</ModalTitle>
            <ModalButton onClick={() => setShowModal(false)} className="cancel">
              Abbrechen
            </ModalButton>
            <ModalButton onClick={handleDelete} className="delete">
              Löschen
            </ModalButton>
          </ModalContent>
        </ModalContainer>
      )}
      {!showModal && <HiddenModal />}
    </div>
  );
}

export default ModalDelete;
