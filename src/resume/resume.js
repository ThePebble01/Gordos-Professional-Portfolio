import JGResume from "./john-gordos-resume.pdf";
function Resume() {
  return (
    <center>
      <h2>Resume</h2>
      <embed
        src={JGResume}
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </center>
  );
}

export default Resume;
