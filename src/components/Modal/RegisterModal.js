import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import classes from "./RegisterModal.module.css";

const RegisterModal = () => {
  const [show, setShow] = useState(false);

  const handleCreateAccount = () => {
    //axios
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <h6 variant="primary" onClick={handleShow}>
        Sign up
      </h6>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateAccount}>
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegisterModal;
