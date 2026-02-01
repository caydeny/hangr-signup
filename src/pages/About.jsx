import { useEffect } from "react";
import "./About.css";

function About() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".about__animate, .about__images img"
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      }
    );



    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <h1 className="about__header about__animate about__delay-0">
        Redefining brand discovery that fits your{" "}
        <span className="about__header-span">unique style.</span>
      </h1>

      <p className="about__p1 about__animate about__delay-1">
        hangr is a brand discovery app that makes finding new fashion labels
        effortless and personal. Users swipe through curated brands and products
        that fit their unique style.
      </p>

      <div className="about__images">
        <div className="about__col">
          <img src="./1.png" alt="Preview 1" />
        </div>
        <div className="about__col">
          <img src="./2.png" alt="Preview 2" />
          <img src="./3.png" alt="Preview 3" />
        </div>
      </div>

      <p className="about__p2 about__animate about__delay-2">
        hangr connects people to fashion labels that reflect who they are.
        Effortless discovery, meaningful connection, and style without the noise.
      </p>
    </section>
  );
}

export default About;
