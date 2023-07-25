import Alert from "react-bootstrap/Alert";
function FormErrors({ errorMessage }) {
  if (!errorMessage) {
    return <></>;
  }
  return <Alert variant="danger">{errorMessage}</Alert>;
}

export default FormErrors;
