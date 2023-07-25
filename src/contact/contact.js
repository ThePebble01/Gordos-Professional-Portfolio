//obfuscate org id, move post to f() w/n contact.js
import { useState } from "react";
import "./contact.css";
import ContactForm from "./contact-form/contact-form";
import FormErrors from "./form-errors/form-errors.js";
function Contact() {
  let [messageValue, setValue] = useState(0);
  const handleOnBlur = (event) => {
    const input = event.currentTarget;
    console.log(input.value);
    setValue(input.value);
  };
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      <ContactForm handleOnBlur={handleOnBlur} />
      <br />
      <FormErrors message={messageValue} />
    </section>
  );
}

export default Contact;
