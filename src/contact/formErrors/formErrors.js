import Alert from "react-bootstrap/Alert";
export default function FormErrors({ errorMessage }) {
  if (!errorMessage) {
    return <></>;
  }
  return <Alert variant="danger">{errorMessage}</Alert>;
}
