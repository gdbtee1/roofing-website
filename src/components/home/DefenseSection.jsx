import { ArrowUpRight } from "lucide-react";

function DefenseSection() {
  return (
    <section className="defense-section">
      <div className="defense-top">
        <div className="section-kicker">
          <span className="section-number">01</span>
          <span className="section-line" />
          <span>BUILT FOR PROTECTION</span>
        </div>

        <span className="section-location">
          WEST MICHIGAN / ROOFING SYSTEMS
        </span>
      </div>

      <div className="defense-heading-grid">
        <h2>
          YOUR HOME'S
          <br />
          FIRST LINE
          <br />
          OF DEFENSE.
        </h2>

        <div className="defense-copy">
          <p>
            A roof does more than cover a structure. It takes the hit from
            wind, rain, snow and ice before anything underneath it ever has to.
          </p>

          <a href="#">
            EXPLORE OUR ROOFING SYSTEMS
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      <div className="defense-image-wrap">
        <div className="defense-image">
          <div className="defense-image-overlay" />

          <div className="defense-image-copy">
            <span>SYSTEM / 01</span>

            <h3>
              BUILT FROM
              <br />
              THE DECK UP.
            </h3>
          </div>

          <span className="defense-image-meta">
            RIDGELINE / IN THE FIELD
          </span>
        </div>
      </div>
    </section>
  );
}

export default DefenseSection;
