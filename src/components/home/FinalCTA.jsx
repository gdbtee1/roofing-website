import { ArrowUpRight } from "lucide-react";

function FinalCTA() {
  return (
    <section className="roof-final" id="estimate">
      <div className="roof-final-mark">
        <span />
        <span />
      </div>

      <div className="roof-final-copy">
        <span>07 / START HERE</span>

        <h2>
          CHECK THE ROOF
          <br />
          BEFORE IT
          <br />
          CHECKS YOU.
        </h2>

        <p>
          Start with an inspection. We’ll help you understand what the roof
          needs, what can wait and what cannot.
        </p>

        <a href="tel:6165550124">
          REQUEST AN INSPECTION
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}

export default FinalCTA;
