import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <span className="hero-badge">
          HTML SEO Analyzer
        </span>

        <h1>
          Analyze your HTML.
          <br />
          Improve your SEO.
        </h1>

        <p>
          Paste your HTML source code and instantly analyze your page's
          SEO structure. Detect missing tags, headings, meta information,
          image alt attributes and more.
        </p>

        <a href="#analyzer" className="hero-button">
          Start Analysis
        </a>
      </div>
    </section>
  );
}

export default Hero;