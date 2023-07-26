import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function ContactForm({ handleOnBlur }) {
  return (
    <Form noValidate>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          onBlur={handleOnBlur}
          placeholder="What is your name?"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          onBlur={handleOnBlur}
          placeholder="What is your email?"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          name="subject"
          type="text"
          onBlur={handleOnBlur}
          placeholder="Why are you reaching out?"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
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
