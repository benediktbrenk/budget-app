import React from "react";
import * as Styled from "./ModalDelete.styled.js";
import { Button } from "../Button/Button.styled.js";

function ModalDelete({ showModal, setShowModal, id, deleteTransaction }) {
  function handleDelete() {
    deleteTransaction(id);
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <Styled.ModalContainer>
          <Styled.ModalContent>
            <Styled.ModalTitle>Do you really want to delete?</Styled.ModalTitle>
            <Button $type="cancel" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button $type="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Styled.ModalContent>
        </Styled.ModalContainer>
      )}
    </>
  );
}

export default ModalDelete;
