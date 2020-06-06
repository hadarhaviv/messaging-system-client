import React from 'react';
import './MailForm.scss';

const MailForm = ({ itemData }) => {
  const { subject, receiver, body } = itemData;
  return (
    <div className="mail-form">
      <div className="form-group">
        <b>To: </b> {receiver.name}
      </div>
      <div className="form-group">
        <b>Subject: </b>
        {subject}
      </div>
      <div className="form-group">
        <b>Message: </b>
        {body}
      </div>
    </div>
  );
};

export default MailForm;
