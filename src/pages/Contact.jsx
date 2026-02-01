import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__header">
          <h1 className="contact__header-title">Contact Us!</h1>
          <div className="contact__header-socials">
            <a
              href="https://instagram.com/hangrstudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./instagram.png"
                alt="Instagram"
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
        </div>
        <div className="divider" />
        <p className="contact__description">
          We'd love to hear from you. Reach out and connect with the hangr team.
        </p>
        <p className="contact__email">contact.hangr.app@gmail.com</p>
        <Link to="/privacy" className="privacy-policy">
          Privacy Policy
        </Link>

        <p className="trademark">© 2026 hangr.</p>

      </section>
    </>
  );
}
export default Contact;