import './COntact.css';

function Contact() {
  
  return (
    <>
      <section className="contact">
        <h1 className="contact__header">Contact Us.</h1>
        <div className="contact-row">
          <h2 className="contact__subheader">
            Explore, Uncover, and Connect with brands that 
            fit your unique style
          </h2>
          <div className="contact-column">
            <h3 className="contact__info-header">Contact</h3>
            <p className="contact__info-details">hangr@gmail.com</p>
            <p className="contact__info-details">123 Address St</p>
            <p className="contact__info-details">(123) 456 7890</p>
          </div>
          <div className="contact-column">
            <h3 className="contact__info-header">Follow us</h3>
            <div className="contact-row">
              <img src="./instagram.svg" />
              <p className="contact__info-details">@hangr</p>
            </div>
            <div className="contact-row">
              <img src="./instagram.svg" />
              <p className="contact__info-details">@hangr</p>
            </div>
            <div className="contact-row">
              <img src="./instagram.svg" />
              <p className="contact__info-details">@hangr</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;