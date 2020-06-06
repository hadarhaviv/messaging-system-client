import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalWrapper = ({ children, handleClose }) => {
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

ModalWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired
};
