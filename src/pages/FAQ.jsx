import { useState, useRef } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqs = [
    {
      q: "Is hangr free to use?",
      a: "Yes. Hangr will be free to use during both the early-access and public release phases.",
    },
    {
      q: "When will hangr launch?",
      a: "Hangr is currently in its early development phase. After initial engagement testing, early-access invitations will be sent to waitlist members.",
    },
    {
      q: "Are the brands on hangr real?",
      a: "During the demo phase, the platform uses AI-generated clothing and brands for engagement testing. Real designer and brand partnerships will be introduced once user traction grows.",
    },
  ];

  return (
    <section className="faq" id="faq">
      <h1 className="faq__header">Frequently Asked <br />Questions</h1>

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
              <span className="faq__symbol">
                {activeIndex === index ? "–" : "+"}
              </span>
              <span className="faq__text">{item.q}</span>
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`faq__answer-wrapper ${
                activeIndex === index ? "active" : ""
              }`}
              style={{
                maxHeight:
                  activeIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
              }}
            >
              <p className="faq__answer">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FAQ;
