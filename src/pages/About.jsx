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
            <h2 className="about__point-title">Have the right conversation, every time.</h2>
          </div>
          <p className="about__point-desc">
            hangr was created by a group of university students passionate about fashion, technology,
            and helping people express themselves. We noticed that many people who are curious
            about fashion feel overwhelmed by the sheer number of brands and trends online, and we
            wanted to make discovering new styles exciting, intuitive, and personal.
          </p>

          {/* Point #2 */}
          <div className="about__point-wrapper">
            <div className="about__point-icon"></div>
            <h2 className="about__point-title">Discover, shop, and engage effortlessly</h2>
          </div>
          <p className="about__point-desc">
            With hangr, you don't just browse. You explore, uncover, and connect with brands that fit
            your unique style. Our mission is to simplify the way people who care about fashion
            discover, shop, and engage with the brands they love, all while staying ahead of trends
            without the clutter.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
