import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__content-wrapper">

        <div className="about__intro">
          <h1 className="about__header">
            Redefining how we discover brands.
          </h1>
          <div className="divider"></div>
          <p className="about__subheader">
            hangr connects people to fashion labels that reflect who they are — 
            effortless discovery, meaningful connection, and style without the noise.
          </p>
        </div>

        <div className="about__divider">
          {/* Point #1 */}
          <div className="about__point-wrapper">
            <div className="about__point-icon"></div>
            <h2 className="about__point-title">what is hangr?</h2>
          </div>
          <p className="about__point-desc">
            hangr is a brand discovery app designed to make finding new fashion labels effortless, inspiring, and personal. Instead of endless scrolling, 
            users can swipe through curated brands and products that match their unique style.
          </p>

          {/* Point #2 */}
          <div className="about__point-wrapper">
            <div className="about__point-icon"></div>
            <h2 className="about__point-title">Who is behind hangr?</h2>
          </div>
          <p className="about__point-desc">
            hangr was developed by a group of university students passionate about fashion and technology. The team recognized that many people who love 
            fashion struggle to find brands that align with their individuality, and created Hangr to simplify that discovery process.
          </p>
        </div>
        
      </div>
    </section>
  );
}
export default About;
