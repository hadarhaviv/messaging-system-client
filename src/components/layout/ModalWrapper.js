import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
// import './ModalWrapper.scss';

const ModalWrapper = ({ children, handleClose }) => {
  //const [isOpen, setOpen] = useState(true);

  const onCloseModal = () => {
    handleClose();
  };

  return (
    <Modal open={true} onClose={onCloseModal} center>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
