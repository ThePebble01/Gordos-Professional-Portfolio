import Alert from "react-bootstrap/Alert";
function FormErrors(props) {
  const message = props.errorMessage;
  return <>{message ? <Alert variant="danger">{message}</Alert> : <></>}</>;
}

export default FormErrors;
