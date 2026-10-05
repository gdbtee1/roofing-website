function Footer() {
  return (
    <footer className="roof-footer">
      <div className="roof-footer-top">
        <div className="roof-footer-brand">
          <div className="brand-mark">
            <span>R</span>
          </div>

          <div>
            <h2>RIDGELINE ROOFING</h2>
            <p>GRAND RAPIDS, MICHIGAN</p>
          </div>
        </div>

        <div className="roof-footer-nav">
          <a href="#">HOME</a>
          <a href="#roofing">ROOFING</a>
          <a href="#projects">PROJECTS</a>
          <a href="#process">PROCESS</a>
        </div>

        <div className="roof-footer-contact">
          <span>CALL</span>
          <a href="tel:6165550124">(616) 555-0124</a>
        </div>
      </div>

      <div className="roof-footer-line" />

      <div className="roof-footer-bottom">
        <span>RIDGELINE ROOFING © 2026</span>
        <span>DEMONSTRATION WEBSITE</span>
      </div>
    </footer>
  );
}

export default Footer;
