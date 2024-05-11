export default function Contact() {
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="label-container">
            <h1 className="title">Contact Me</h1>
          </div>
          <div className="contact-section">
            <form
              className="form"
              id="contactForm"
              action="https://formspree.io/f/xnqewabp"
              method="POST"
            >
              <div className="form-row ">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter Message"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-row center">
                <input type="submit" defaultValue="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
