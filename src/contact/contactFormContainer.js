import { useState } from "react";
import ContactForm from "./contactForm/contactForm";
import FormErrors from "./formErrors/formErrors.js";
import "bootstrap/dist/css/bootstrap.css";
export default function ContactFormContainer() {
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
      .then(handleCaseSubmission())
      .catch((error) => console.log("error", error));
  }
  function handleCaseSubmission() {
    setSuccess(
      "You have successfully submitted a case!  The component will refresh momentarily."
    );
    let secondsRemaining = 5;
    let successMsgTimer = setInterval(function () {
      secondsRemaining--;
      if (secondsRemaining <= 0) {
        setSuccess(null);
        clearInterval(successMsgTimer);
      }
    }, 1000);
  }
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      {successMessage ? (
        <center className="mb-3">{successMessage}</center>
      ) : (
        <>
          <ContactForm
            handleOnBlur={handleOnBlur}
            handleOnSubmit={handleOnSubmit}
          />
          <br />
          <FormErrors errorMessage={errorMessage} />
        </>
      )}
    </section>
  );
}
