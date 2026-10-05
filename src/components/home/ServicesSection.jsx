import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "ROOF REPLACEMENT",
    label: "FULL SYSTEM",
    text: "Complete tear-off and replacement built around long-term protection.",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "02",
    title: "STORM RESTORATION",
    label: "WIND / HAIL",
    text: "Inspection and restoration after severe wind, hail and weather damage.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "03",
    title: "COMMERCIAL ROOFING",
    label: "LOW-SLOPE",
    text: "Roofing systems built for commercial facilities and larger properties.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
  },
];

function ServicesSection() {
  return (
    <section className="roof-services">
      <div className="roof-services-heading">
        <span>03 / CAPABILITIES</span>

        <h2>
          BUILT FOR
          <br />
          THE ROOFLINE.
        </h2>

        <p>
          Different properties need different systems. We build around the
          structure, pitch and conditions instead of forcing one solution.
        </p>
      </div>

      <div className="roof-services-grid">
        {services.map((service) => (
          <article className="roof-service" key={service.title}>
            <div className="roof-service-image">
              <img src={service.image} alt={service.title} />

              <span className="roof-service-number">
                {service.number}
              </span>

              <span className="roof-service-label">
                {service.label}
              </span>
            </div>

            <div className="roof-service-info">
              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#">
                EXPLORE
                <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
