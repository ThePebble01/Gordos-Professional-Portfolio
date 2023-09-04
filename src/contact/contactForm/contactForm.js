import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function ContactForm({ handleOnBlur, handleOnSubmit }) {
  function collectFormData(e) {
    e.preventDefault();
    const oid = "00D1a000000KLMa";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;
    const retUrl = "/contact";
    handleOnSubmit({ oid, name, email, subject, description, retUrl });
  }
  return (
    <Form noValidate onSubmit={collectFormData}>
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
