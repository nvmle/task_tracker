import React from "react";

import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const ModalWindow = ({ title, show, setShow, children, onSubmit, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success" onClick={onSubmit}>
          Создать
        </button>
        <button className="btn btn-secondary" onClick={onClose}>
          Отмена
        </button>
      </Modal.Footer>
    </Modal>
  );
};
ModalWindow.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  setShow: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
};

export default ModalWindow;
