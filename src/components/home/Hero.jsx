import { ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-number">616</span>
          <span className="hero-line" />
          <span>WEST MICHIGAN / RESIDENTIAL + COMMERCIAL</span>
        </div>

        <h2 className="hero-title">
          ROOFING BUILT
          <br />
          TO OUTLAST
          <br />
          THE STORM.
        </h2>

        <div className="hero-bottom">
          <div className="hero-copy">
            <p>
              Roofing systems engineered for Michigan weather,
              long-term protection and serious curb appeal.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                GET A FREE INSPECTION
                <ArrowUpRight size={18} />
              </button>

              <button className="text-button">
                SEE OUR WORK
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          <div className="hero-services">
            <div>
              <span>01</span>
              <strong>ROOF REPLACEMENT</strong>
            </div>

            <div>
              <span>02</span>
              <strong>STORM DAMAGE</strong>
            </div>

            <div>
              <span>03</span>
              <strong>COMMERCIAL ROOFING</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-roof-cut" />
    </section>
  );
}

export default Hero;
