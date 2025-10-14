import './FAQ.css';

function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="faq__content">
        <h1 className="faq__header">FAQ.</h1>

        <div className="faq__list">
          <div className="faq__item">
            <h2 className="faq__question">Is hangr free to use?</h2>
            <p className="faq__answer">
              Yes. Hangr will be free to use during both the early-access and public release phases.
            </p>
          </div>

          <div className="faq__item">
            <h2 className="faq__question">Why should I join the waitlist?</h2>
            <p className="faq__answer">
              Joining the waitlist provides early access to hangr's beta version, allowing participants to 
              experience the app before its public release and share valuable feedback to help improve the platform.
            </p>
          </div>

          <div className="faq__item">
            <h2 className="faq__question">When will Hangr launch?</h2>
            <p className="faq__answer">
              hangr is currently in its early development phase. After initial engagement testing, 
              early-access invitations will be sent to waitlist members.            
            </p>
          </div>

          <div className="faq__item">
            <h2 className="faq__question">Are the brands on hangr real?</h2>
            <p className="faq__answer">
              During the demo phase, the platform uses AI-generated clothing and brands for engagement testing.
              Real designer and brand partnerships will be introduced once user traction grows.
            </p>
          </div>

          <div className="faq__item">
            <h2 className="faq__question">Why is an email address required?</h2>
            <p className="faq__answer">
              Email addresses are collected only to provide updates about beta invitations, platform progress, and launch announcements.
            </p>
          </div>

          <div className="faq__item">
            <h2 className="faq__question">Will user data be shared or sold?</h2>
            <p className="faq__answer">
              No. User information is kept private and secure. Hangr does not sell or share data with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
