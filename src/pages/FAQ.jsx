import { useState } from "react";
import "./FAQ.css";

function FAQ() {

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Is Hangr free to use?",
      a: "Yes. Hangr will be free to use during both the early-access and public release phases.",
    },
    {
      q: "Why should I join the waitlist?",
      a: "Joining the waitlist provides early access to Hangr’s beta version, allowing participants to experience the app before its public release and share feedback to help improve the platform.",
    },
    {
      q: "When will Hangr launch?",
      a: "Hangr is currently in its early development phase. After initial engagement testing, early-access invitations will be sent to waitlist members.",
    },
    {
      q: "Are the brands on Hangr real?",
      a: "During the demo phase, the platform uses AI-generated clothing and brands for engagement testing. Real designer and brand partnerships will be introduced once user traction grows.",
    },
    {
      q: "Why is an email address required?",
      a: "Email addresses are collected only to provide updates about beta invitations, platform progress, and launch announcements.",
    },
    {
      q: "Will user data be shared or sold?",
      a: "No. User information is kept private and secure. Hangr does not sell or share data with third parties.",
    },
  ];

  return (
    <section className="faq" id="faq">
      <h1 className="faq__header">FAQ.</h1>

      <div className="faq__list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq__item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq__question"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span>{item.q}</span>
              <span className="faq__icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <p className="faq__answer">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default FAQ;
