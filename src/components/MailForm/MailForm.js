import React, { useState } from 'react';
import ModalWrapper from '../layout/ModalWrapper';
import './MailForm.scss';
import { sendMail } from '../../api/messages';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MailForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    body: ''
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    sendMail(formData);
    handleClose();
  };

  const handleClose = () => {
    props.history.push('/');
  };

  return (
    // <ModalWrapper handleClose={handleClose}>
    <form className="mail-form" onSubmit={onSubmit}>
      <h1>New Message</h1>
      <p className="lead">
        <FontAwesomeIcon icon={faEnvelope} /> Create new message
      </p>
      <div className="form-group">
        To:{' '}
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        Subject:
        <input
          name="subject"
          onChange={onChange}
          type="text"
          placeholder="Subject"
          required
        />
      </div>
      <div className="form-group">
        Message:{' '}
        <textarea
          onChange={onChange}
          cols="30"
          rows="5"
          type="text"
          name="body"
          placeholder="Enter your text here"
          required
        />
      </div>
      <input type="submit" value="Send" />
    </form>
    // </ModalWrapper>
  );
};

export default MailForm;
