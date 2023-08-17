import { useState } from "react";
import ContactForm from "./contactForm/contactForm";
import FormErrors from "./formErrors/formErrors.js";
import Form from "react-bootstrap/Form";
function Contact() {
  let [errorMessage, setError] = useState();
  let [successMessage, setSuccess] = useState();
  const handleOnBlur = (event) => {
    const input = event.currentTarget;
    if (!input.value || input.value == "") {
      setError(
        `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required!`
      );
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
  function handleOnSubmit({ oid, name, email, subject, description, retUrl }) {
    fetch(
      `https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgid=${oid}&retURL=${retUrl}&name=${name}&subject=${subject}&description=${description}&email=${email}&submit=Submit`,
      {
        method: "POST",
        mode: "no-cors",
      }
    )
      .then((response) => response.text())
      .then(setSuccess("You have successfully submitted a case!"))
      .catch((error) => console.log("error", error));
  }
  if (successMessage) {
    return (
      <section id="contact" className="container">
        <h2>Contact</h2>
        <center className="mb-3">
          <Form.Label>{successMessage}</Form.Label>
        </center>
      </section>
    );
  } else {
    return (
      <section id="contact" className="container">
        <h2>Contact</h2>
        <ContactForm
          handleOnBlur={handleOnBlur}
          handleOnSubmit={handleOnSubmit}
        />
        <br />
        <FormErrors errorMessage={errorMessage} />
      </section>
    );
  }
}

export default Contact;
