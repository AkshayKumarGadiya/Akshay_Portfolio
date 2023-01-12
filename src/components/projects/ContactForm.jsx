import React from 'react';
// import sendemail from '../../../node_modules/sendemail/lib/index';
// import * as emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    // const sendemail = require('sendemail');
    // const { email } = sendemail.email;
    const { name, emails, message } = e.target.elements;
    const conFom = {
      name: name.value,
      emails: emails.value,
      message: message.value,
    };
    alert('Thank you for contacting me.' + conFom.name);
    // email('welcome', conFom);
    setFormStatus('Thank You');
  };
  return (
    <div className="mt-12">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input name="name" type="text" className="form-control" placeholder="Enter your name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="emails">
            Email
          </label>
          <input className="form-control" type="email" id="emails" placeholder="Enter your email address" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" placeholder="Message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
