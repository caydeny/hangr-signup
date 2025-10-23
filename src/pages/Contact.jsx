import './Contact.css';

function Contact() {

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__header">
          <h1 className="contact__header-title">Contact Us!</h1>
          <div className="contact__header-socials">
            <img src="./instagram.png" alt="" />
            <img src="./linkedin.png" alt="" />
            <img src="./twitter.png" alt="" />
          </div>
        </div>
        <div className="divider" />
        <p className="contact__description">
          We'd love to hear from you. Reach out and connect with the hangr team.
        </p>
        <p className="contact__email">hangr@gmail.com</p>
        <a href="" className="privacy-policy">Privacy Policy</a>
        <p className="trademark">© 2025 hangr.</p>

      </section>
    </>
  );
}
export default Contact;