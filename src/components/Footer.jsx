export default function Footer() {
  return (
    <>
      <div id="footer">
        <footer>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="social-media">
            <a
              href="https://www.facebook.com/sachin.kumar.nimbal9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook" />
            </a>
            <a
              href="https://github.com/sachinnimbal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-codepen" />
            </a>
            <a
              href="https://codepen.io/sachinnimbal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github" />
            </a>
            <a
              href="https://www.instagram.com/sachin.kumar.nimbal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-nimbal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </div>
          <div className="copyright">
            © <span id="currentYear" /> Sachin Nimbal
          </div>
        </footer>
      </div>
    </>
  );
}
