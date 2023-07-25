import JGResume from "./john-gordos-resume.pdf";
function Resume() {
  const onButtonClick = () => {
    fetch("John Gordos - Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
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
