function StormSection() {
  return (
    <section className="roof-weather">
      <div className="roof-weather-image" />

      <div className="roof-weather-panel">
        <span>06 / WEATHER LOAD</span>

        <h2>
          BUILT FOR
          <br />
          WHAT HITS IT.
        </h2>

        <p>
          Wind, snow, rain and ice do not attack every part of a roof equally.
          The system has to manage pressure, moisture and temperature together.
        </p>

        <div className="weather-specs">
          <div>
            <strong>WIND</strong>
            <span>High-pressure edge zones</span>
          </div>

          <div>
            <strong>RAIN</strong>
            <span>Layered water shedding</span>
          </div>

          <div>
            <strong>ICE</strong>
            <span>Critical eave protection</span>
          </div>

          <div>
            <strong>HEAT</strong>
            <span>Balanced attic ventilation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StormSection;
