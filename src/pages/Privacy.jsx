import { useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Privacy.css";
import Contact from "./Contact.jsx";

function Privacy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = useMemo(
    () => [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Hangr collects limited information to operate the waitlist and improve the product experience.",
          "This policy explains what we collect, how we use it, and the choices you have.",
        ],
      },
      {
        id: "collect",
        title: "Information we collect",
        body: [
          "Email address when you join the waitlist.",
          "Event + usage signals (for example: waitlist signup events, aggregated counts).",
        ],
      },
      {
        id: "use",
        title: "How we use information",
        body: [
          "Operate and manage the waitlist.",
          "Send launch announcements and product updates.",
        ],
      },
      {
        id: "sharing",
        title: "Sharing",
        body: [
          "We do not sell your personal information.",
          "We use trusted service providers to help run hangr (for example: Plunk for email delivery and waitlist management). These providers process data on our behalf and are expected to protect it.",
        ],
      },

      {
        id: "retention",
        title: "Data retention",
        body: [
          "We keep waitlist information as long as needed to operate the waitlist and communicate about hangr.",
          "You can request deletion at any time.",
        ],
      },
      {
        id: "choices",
        title: "Your choices",
        body: [
          "Request access, correction, or deletion of your email.",
          "Unsubscribe from emails using the link in any message.",
        ],
      },
      {
        id: "security",
        title: "Security",
        body: [
          "hangr uses trusted providers (including Plunk) to collect and store waitlist information.",
          "We rely on these providers’ security measures and use reasonable safeguards on our side, but no method of transmission or storage is 100% secure.",
        ],
      },

      {
        id: "contact",
        title: "Contact",
        body: ["For privacy requests, email: contact.hangr@gmail.com"],
      },
    ],
    []
  );

  return (
    <>
      <section className="privacy">
        <div className="privacy__top">
          <button className="privacy__back" onClick={() => navigate("/")}>
            ← Back
          </button>
        </div>

        <div className="privacy__wrap">
          <h1 className="privacy__hero">
            Privacy that respects{" "}
            <span className="privacy__hero-italic">your data.</span>
          </h1>

          <p className="privacy__lede">Last updated: January 31, 2026</p>

          <div className="privacy__content">
            {sections.map((s) => (
              <div key={s.id} className="privacy__section">
                <h2 className="privacy__title">{s.title}</h2>

                {s.body.length === 1 ? (
                  <p className="privacy__p">{s.body[0]}</p>
                ) : (
                  <ul className="privacy__bullets">
                    {s.body.map((t, i) => (
                      <li key={i} className="privacy__p">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Privacy;
