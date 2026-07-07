import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          Aiseo<span>Logy</span>
        </a>

        <nav className="navigation">
          <a href="#analyzer">Analyzer</a>

          <a
            href="https://github.com/ulaserden/AiseoLogy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;