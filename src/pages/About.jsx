import './About.css';

function About() {
  
  return (
    <>
      <section className="about" id="about">
        <h1 className="about__header">
          Redefining brand discovery that fits your <span className="about__header-span">unique style.</span>
        </h1>
        <p className="about__p1">
          hangr is a brand discovery app that makes finding new fashion labels effortless and personal. Users swipe through curated brands and products that fit their unique style.
        </p>
        <img src="./samples.png" alt="sample clothing" className="about__sample" />
        <p className="about__p2">
          hangr connects people to fashion labels that reflect who they are. Effortless discovery, meaningful connection, and style without the noise.
        </p>
      </section>
    </>
  );
}
export default About;