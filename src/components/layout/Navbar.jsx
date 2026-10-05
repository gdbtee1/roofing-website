import { useState } from "react";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">

          <a href="#" className="brand">
            <div className="brand-mark">
              <span>R</span>
            </div>

            <div className="brand-copy">
              <h1>RIDGELINE ROOFING</h1>
              <p>GRAND RAPIDS, MICHIGAN</p>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#">HOME</a>
            <a href="#roofing">ROOFING</a>
            <a href="#projects">PROJECTS</a>
            <a href="#process">PROCESS</a>
          </nav>

          <div className="navbar-actions">
            <a href="tel:6165550124" className="phone">
              <Phone size={18} />
              (616) 555-0124
            </a>

            <a href="#estimate" className="quote-button desktop-quote">
              GET AN ESTIMATE
              <ArrowUpRight size={18} />
            </a>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
            >
              <span>MENU</span>
              <Menu size={22} />
            </button>
          </div>

        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-top">
          <div className="mobile-menu-brand">
            <div className="brand-mark">
              <span>R</span>
            </div>

            <div>
              <h2>RIDGELINE ROOFING</h2>
              <p>GRAND RAPIDS, MICHIGAN</p>
            </div>
          </div>

          <button
            className="mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <X size={26} />
          </button>
        </div>

        <div className="mobile-menu-body">
          <nav className="mobile-nav">
            <a href="#" onClick={() => setMenuOpen(false)}>
              <span>01</span>
              HOME
            </a>

            <a href="#roofing" onClick={() => setMenuOpen(false)}>
              <span>02</span>
              ROOFING
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              <span>03</span>
              PROJECTS
            </a>

            <a href="#process" onClick={() => setMenuOpen(false)}>
              <span>04</span>
              PROCESS
            </a>
          </nav>

          <div className="mobile-menu-bottom">
            <div>
              <span className="mobile-small-label">CALL RIDGELINE</span>
              <a href="tel:6165550124" className="mobile-phone">
                (616) 555-0124
              </a>
            </div>

            <a href="#estimate" className="mobile-estimate">
              GET A FREE ESTIMATE
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        <div className="mobile-menu-angle" />
      </div>
    </>
  );
}

export default Navbar;
