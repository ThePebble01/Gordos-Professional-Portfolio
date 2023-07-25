import { useState } from "react";
import "./contact.css";
import ContactForm from "./contactForm/contactForm";
import FormErrors from "./formErrors/formErrors.js";
function Contact() {
  let [errorMessage, setError] = useState();
  const handleOnBlur = (event) => {
    const input = event.currentTarget;
    if (!input.value || input.value == "") {
      setError(
        `${
          input.name.charAt(0).toUpperCase() + input.name.slice(1)
        } is required!`
      );
      return;
    } else if (
      input.name == "email" &&
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
