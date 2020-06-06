import React, { useState } from 'react';
import './NewMailForm.scss';
import { sendMail } from '../../services/messages';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewMailForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    body: ''
  });
  const [error, setError] = useState(null);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await sendMail(formData);
      props.handleSubmit();
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form className="new-mail-form" onSubmit={onSubmit}>
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
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
      <input type="submit" value="Send" />
    </form>
  );
};

export default NewMailForm;
