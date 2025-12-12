import { useEffect } from "react";
import './About.css';

function About() {

  useEffect(() => {
    const images = document.querySelectorAll('.about__images img');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    images.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <h1 className="about__header">
        Redefining brand discovery that fits your{" "}
        <span className="about__header-span">unique style.</span>
      </h1>

      <p className="about__p1">
        hangr is a brand discovery app that makes finding new fashion labels effortless and personal.
        Users swipe through curated brands and products that fit their unique style.
      </p>

      <div className="about__images">
        <div className="about__col">
          <img src="./1.png" alt="Preview 1" className="about__img" />
        </div>
        <div className="about__col">
          <img src="./2.png" alt="Preview 2" className="about__img" />
          <img src="./3.png" alt="Preview 3" className="about__img" />
        </div>
      </div>

      <p className="about__p2">
        hangr connects people to fashion labels that reflect who they are.
        Effortless discovery, meaningful connection, and style without the noise.
      </p>
    </section>
  );
}

export default About;
