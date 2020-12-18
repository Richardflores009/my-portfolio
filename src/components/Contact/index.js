import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
          }  
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    //   console.log(formState);
// JSX
return(
    <div align="center">
       <div className="container">
    <h1 data-testid="contact">Contact Me</h1>
    <form id="contact-form" onSubmit={handleSubmit} >
    <div className="row">
      <div className="col-25">
        <label htmlFor="name">Name:</label>
      </div>
      <div className="col-75">
        <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="email">Eamil Address:</label>
      </div>
      <div className="col-75">
        <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="message">Message:</label>
      </div>
      <div className="col-75">
        <textarea className="text" name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
      </div>
    </div>
    <div className="row">
      <input type="submit" value="Submit"/>
    </div>
    </form>
  </div>
    </div>
    
);

}
    
    export default Contact;