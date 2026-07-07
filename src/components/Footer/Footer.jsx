import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>AiseoLogy</h3>

          <p>
            Analyze your HTML and improve your website's SEO with a
            simple and modern interface.
          </p>
        </div>

        <div className="footer-links">
          <a href="#analyzer">Analyzer</a>

          <a
            href="https://github.com/ulaserden/AiseoLogy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {currentYear} AiseoLogy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;