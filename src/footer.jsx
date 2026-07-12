import "./footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top reveal">
        <h2>
          LET'S BUILD
          <br />
          SOMETHING GOOD.
        </h2>
        <a className="footer-email" href="mailto:etsubamha4@gmail.com">
          etsubamha4@gmail.com
        </a>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <span className="footer-label">Contact</span>
          <a href="mailto:etsubamha4@gmail.com">etsubamha4@gmail.com</a>
          <a href="tel:+251910287010">+251 91 028 7010</a>
        </div>

        <div className="footer-col">
          <span className="footer-label">Elsewhere</span>
          <a
            href="https://github.com/Etsub-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/etsub-amha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="footer-col">
          <span className="footer-label">Site</span>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Projects</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Etsub Amha</span>
        <span>Addis Ababa, Ethiopia</span>
      </div>
    </footer>
  );
}

export default Footer;
