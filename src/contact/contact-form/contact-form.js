//https://react-bootstrap.netlify.app/docs/getting-started/introduction
//https://react-bootstrap.netlify.app/docs/forms/overview
//form-group, form-control btn btn-primary
import Form from "react-bootstrap/Form";
function ContactForm(props) {
  return (
    <Form noValidate>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          id="name"
          type="text"
          onBlur={props.handleOnBlur}
          placeholder="What is your name?"
        />
        <Form.Control.Feedback type="invalid">
          Name is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          placeholder="What is your email?"
        />
        <Form.Control.Feedback type="invalid">
          Email is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          id="subject"
          type="text"
          placeholder="Why are you reaching out?"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Details</Form.Label>
        <Form.Control
          id="description"
          as="textarea"
          placeholder="What are the details of your outreach?"
        />
      </Form.Group>
    </Form>
  );
}

export default ContactForm;
