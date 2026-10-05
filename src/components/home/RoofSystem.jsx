import { useState } from "react";

const layers = [
  {
    id: "01",
    title: "ARCHITECTURAL SHINGLES",
    short: "THE OUTER SHELL",
    text: "The visible surface. Built to shed water, resist wind and define the final roof profile.",
  },
  {
    id: "02",
    title: "SYNTHETIC UNDERLAYMENT",
    short: "THE SECOND BARRIER",
    text: "A high-performance moisture layer beneath the shingles for additional protection.",
  },
  {
    id: "03",
    title: "ICE + WATER SHIELD",
    short: "THE CRITICAL ZONES",
    text: "Focused protection around eaves, valleys, penetrations and vulnerable roof areas.",
  },
  {
    id: "04",
    title: "ROOF DECK",
    short: "THE FOUNDATION",
    text: "The structural surface carrying the complete roofing system above it.",
  },
];

function RoofSystem() {
  const [active, setActive] = useState(0);

  return (
    <section className="roof-system-new" id="roofing">
      <div className="roof-system-intro">
        <div className="roof-system-label">
          <span>02</span>
          <p>ANATOMY OF A ROOF</p>
        </div>

        <h2>
          PROTECTION
          <br />
          HAS LAYERS.
        </h2>

        <p className="roof-system-description">
          A roof is not one material. It is a coordinated system where every
          layer has a job to do.
        </p>
      </div>

      <div className="roof-system-layout">

        <div className="roof-diagram">

          <div className="roof-peak-mark">
            <span />
            <span />
          </div>

          <button
            className={`roof-plane plane-1 ${active === 0 ? "active" : ""}`}
            onMouseEnter={() => setActive(0)}
            onClick={() => setActive(0)}
          >
            <span>01</span>
            <strong>SHINGLES</strong>
          </button>

          <button
            className={`roof-plane plane-2 ${active === 1 ? "active" : ""}`}
            onMouseEnter={() => setActive(1)}
            onClick={() => setActive(1)}
          >
            <span>02</span>
            <strong>UNDERLAYMENT</strong>
          </button>

          <button
            className={`roof-plane plane-3 ${active === 2 ? "active" : ""}`}
            onMouseEnter={() => setActive(2)}
            onClick={() => setActive(2)}
          >
            <span>03</span>
            <strong>ICE + WATER</strong>
          </button>

          <button
            className={`roof-plane plane-4 ${active === 3 ? "active" : ""}`}
            onMouseEnter={() => setActive(3)}
            onClick={() => setActive(3)}
          >
            <span>04</span>
            <strong>DECK</strong>
          </button>

        </div>

        <div className="roof-system-info">
          <span className="roof-system-count">
            {layers[active].id} / 04
          </span>

          <span className="roof-system-short">
            {layers[active].short}
          </span>

          <h3>{layers[active].title}</h3>

          <p>{layers[active].text}</p>

          <div className="roof-system-detail-line" />

          <span className="roof-system-note">
            RIDGELINE SYSTEM / WEST MICHIGAN
          </span>
        </div>

      </div>
    </section>
  );
}

export default RoofSystem;
