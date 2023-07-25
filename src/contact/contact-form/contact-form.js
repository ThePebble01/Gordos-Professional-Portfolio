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
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          onBlur={props.handleOnBlur}
          placeholder="What is your email?"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          id="subject"
          type="text"
          onBlur={props.handleOnBlur}
          placeholder="Why are you reaching out?"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          id="description"
          as="textarea"
          onBlur={props.handleOnBlur}
          placeholder="What are the details of your outreach?"
        />
      </Form.Group>
    </Form>
  );
}

export default ContactForm;
