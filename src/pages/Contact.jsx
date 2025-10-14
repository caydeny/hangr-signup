import './Contact.css';

function Contact() {
  
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="contact__header">Contact Us.</h1>
        <div className="contact-row">
          <h2 className="contact__subheader">
            Explore, Uncover, and Connect with brands that 
            fit your unique style
          </h2>
          <div className="contact__info">
            <h3 className="contact__info-header">Contact</h3>
            <p className="contact__info-details">hangr@gmail.com</p>
            <p className="contact__info-details">123 Address St</p>
            <p className="contact__info-details">(123) 456 7890</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;