import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const points = [
  {
    id: "01",
    title: "SHINGLE FIELD",
    label: "SURFACE",
    text: "Missing, lifted or deteriorated shingles expose the layers beneath them and create a direct path for water.",
    position: "point-one",
  },
  {
    id: "02",
    title: "FLASHING",
    label: "DETAIL",
    text: "Roof-to-wall transitions, chimneys and penetrations depend on correctly installed flashing to redirect water.",
    position: "point-two",
  },
  {
    id: "03",
    title: "VALLEYS",
    label: "DRAINAGE",
    text: "Valleys carry concentrated water flow. Installation details here can determine how the entire roof performs.",
    position: "point-three",
  },
  {
    id: "04",
    title: "VENTILATION",
    label: "AIRFLOW",
    text: "Balanced intake and exhaust ventilation helps manage attic temperature, moisture and roof-system longevity.",
    position: "point-four",
  },
];

function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section className="roof-inspection">
      <div className="inspection-heading">
        <div>
          <span>04 / ROOF INSPECTION</span>

          <h2>
            WHAT FAILS
            <br />
            FIRST?
          </h2>
        </div>

        <p>
          Roofing problems usually begin at specific pressure points. Knowing
          where to look changes how the entire system gets repaired.
        </p>
      </div>

      <div className="inspection-layout">

        <div className="inspection-visual">
          <img
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2000&q=90"
            alt="Residential roofing system"
          />

          <div className="inspection-shade" />

          {points.map((point, index) => (
            <button
              key={point.id}
              className={`inspection-point ${point.position} ${
                active === index ? "active" : ""
              }`}
              onClick={() => setActive(index)}
              aria-label={point.title}
            >
              <span>{point.id}</span>
            </button>
          ))}

          <div className="inspection-image-label">
            <span>RIDGELINE / FIELD ANALYSIS</span>
            <strong>ROOF SYSTEM</strong>
          </div>
        </div>

        <div className="inspection-panel">
          <div className="inspection-selector">
            {points.map((point, index) => (
              <button
                key={point.id}
                onClick={() => setActive(index)}
                className={active === index ? "active" : ""}
              >
                <span>{point.id}</span>

                <div>
                  <small>{point.label}</small>
                  <strong>{point.title}</strong>
                </div>
              </button>
            ))}
          </div>

          <div className="inspection-detail">
            <span>{points[active].label} / DETAIL</span>

            <h3>{points[active].title}</h3>

            <p>{points[active].text}</p>

            <a href="#estimate">
              SCHEDULE AN INSPECTION
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BeforeAfter;
