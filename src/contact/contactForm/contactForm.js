import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function ContactForm({ handleOnBlur }) {
  function handleOnSubmit(e) {
    e.preventDefault();
    const oid = ""; //scramble....
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;
    const retUrl = "/contact";
    fetch(
      `https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgid=${oid}&retURL=${retUrl}&name=${name}&subject=${subject}&description=${description}&email=${email}&submit=Submit`,
      {
        method: "POST",
        mode: "no-cors",
      }
    )
      .then((response) => response.text())
      .then((result) => {
        console.log("result", result); //set success message
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <Form noValidate onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          id="name"
          type="text"
          onBlur={handleOnBlur}
          placeholder="What is your name?"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          onBlur={handleOnBlur}
          placeholder="What is your email?"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          id="subject"
          type="text"
          onBlur={handleOnBlur}
          placeholder="Why are you reaching out?"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          id="description"
          as="textarea"
          onBlur={handleOnBlur}
          placeholder="What are the details of your outreach?"
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;
