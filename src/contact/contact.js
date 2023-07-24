//https://react-bootstrap.netlify.app/docs/getting-started/introduction
//https://react-bootstrap.netlify.app/docs/forms/overview
//form-group, form-control btn btn-primary
//obfuscate org id, move post to f() w/n contact.js
import "./contact.css";
function Contact() {
  return (
    <section id="contact" class="container">
      <h2>Contact</h2>
      <div class="form-container">
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
          method="POST"
        >
          <div class="form-group">
            <input type="hidden" name="orgid" value="00D1a000000KLMa" />
            <input
              type="hidden"
              name="retURL"
              value="https://thepebble01.github.io/Gordos-Professional-Portfolio/"
            />
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              maxlength="80"
              name="name"
            />
            <br />
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                id="email"
                type="email"
                class="form-control"
                maxlength="80"
                name="email"
                size="20"
              />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                id="subject"
                type="text"
                class="form-control"
                maxlength="80"
                name="subject"
                size="20"
              />
            </div>
            <div class="form-group">
              <label for="description">Feedback</label>
              <textarea class="form-control" name="description"></textarea>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
