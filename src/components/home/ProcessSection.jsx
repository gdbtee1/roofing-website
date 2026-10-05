const steps = [
  {
    id: "01",
    title: "INSPECT",
    text: "We inspect the roof surface, flashing, ventilation and visible weak points.",
  },
  {
    id: "02",
    title: "PLAN",
    text: "We build a clear scope around what the property actually needs.",
  },
  {
    id: "03",
    title: "BUILD",
    text: "The existing system is prepared, removed and rebuilt layer by layer.",
  },
  {
    id: "04",
    title: "VERIFY",
    text: "The finished system is checked, cleaned and walked through before closeout.",
  },
];

function ProcessSection() {
  return (
    <section className="ridge-process" id="process">
      <div className="ridge-process-head">
        <div>
          <span>04 / HOW WE BUILD</span>

          <h2>
            FROM GROUND
            <br />
            TO RIDGE.
          </h2>
        </div>

        <p>
          Every project moves through a deliberate sequence. No guessing,
          no skipping steps, no building over problems.
        </p>
      </div>

      <div className="ridge-process-track">
        <div className="ridge-line" />

        {steps.map((step, index) => (
          <article
            key={step.id}
            className={`ridge-step ridge-step-${index + 1}`}
          >
            <div className="ridge-step-point">
              <span>{step.id}</span>
            </div>

            <div className="ridge-step-copy">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </article>
        ))}

        <div className="ridge-peak">
          <span>RIDGE</span>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
