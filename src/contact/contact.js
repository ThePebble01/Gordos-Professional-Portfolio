//obfuscate org id, move post to f() w/n contact.js
import { useState } from "react";
import "./contact.css";
import ContactForm from "./contact-form/contact-form";
import FormErrors from "./form-errors/form-errors.js";
function Contact() {
  let [errorMessage, setError] = useState();
  const handleOnBlur = (event) => {
    const input = event.currentTarget;
    if (!input.value || input.value == "") {
      setError(`${input.id} is required!`);
      return;
    } else if (
      input.id == "email" &&
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value)
    ) {
      setError(`Please enter a valid email!`);
      return;
    }
    setError(null);
  };
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      <ContactForm handleOnBlur={handleOnBlur} />
      <br />
      <FormErrors errorMessage={errorMessage} />
    </section>
  );
}

export default Contact;
