import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__content-wrapper">

        <div className="about__intro">
          <h1 className="about__header">
            Explore, uncover, and connect with brands that fit your unique style
          </h1>
          <p className="about__subheader">Have the right conversation, every time.</p>
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

          {/* Point #3 */}
          <div className="about__point-wrapper">
            <div className="about__point-icon"></div>
            <h2 className="about__point-title">How will it work?</h2>
          </div>
          <p className="about__point-desc">
            The app features an interactive swipe-based experience where users can like, skip, or explore more details including verified links to purchase each piece. Favorited items 
            are saved to a personalized Wardrobe, allowing users to revisit and refine their unique style over time. hangr currently focuses on brand and 
            style discovery and plans to expand into direct brand partnerships and shopping integrations after the beta phase.
          </p>
        </div>
        
      </div>
    </section>
  );
}
export default About;
