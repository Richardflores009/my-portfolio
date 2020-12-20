import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };
      
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    //   console.log(formState);
// JSX
return(
    <div className="flex items-center h-screen w-full bg-teal-lighter">
  <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:mx-auto">
    <h1 className="block w-full text-center text-grey-darkest mb-6 text-4xl">Contact Me</h1>
    <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4 md:w-1/2">
        <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" htmlFor="name">Full Name</label>
        <input className="border py-2 px-3 text-grey-darkest md:mr-2" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
      </div>
      <div className="flex flex-col mb-4 md:w-full">
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="email">Email</label>
        <input className="border py-2 px-3 text-grey-darkest" type="email" name="email" defaultValue={email} onBlur={handleChange}/>
      </div>
      <div className="flex flex-col mb-6 md:w-full">
        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="message">Messsage</label>
        {/* <input className="border py-2 px-3 text-grey-darkest" type="message" name="message" id="message"/> */}
        <textarea className="border py-2 px-3 text-grey-darkest" name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
      </div>
      <button className="bg-blue-400 hover:bg-blue-500 mx-auto rounded p-3" type="submit">submit</button>
    </form>
  </div>
</div>






    
);

}
    
    export default Contact;