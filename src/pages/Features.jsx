import { useState } from "react";
import "./Features.css";

function Features() {
  const slides = [
    {
      id: 1,
      title: "Dislike Button",
      description:
        "Not your style? Mark an outfit as “Dislike” to help us understand what to avoid in future recommendations.",
      image: "./mock.png",
    },
    {
      id: 2,
      title: "Save Brands",
      description:
        "Save your favorite looks directly to your wardrobe. Browse, compare, and revisit your saved outfits anytime.",
      image: "./mock.png",
    },
    {
      id: 3,
      title: "Smart Matching",
      description:
        "Tap Like to instantly improve your style matches. Your feed learns from your likes to recommend new brands that fit your unique style.",
      image: "./mock.png",
    },
    {
      id: 4,
      title: "Info",
      description:
        "Curious about a piece? Tap “Info” to see brand details, materials, and links to shop or learn more.",
      image: "./mock.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleDotClick = (index) => setActiveIndex(index);

  const handleTouchStart = (e) => setTouchStartX(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    } else if (swipeDistance < -50) {
      setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="features" id="features">
      <h1 className="features__header">Features</h1>

      <div className="features__swipe-area">
        <div
          className="features__mock-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src="./backdrop.png"
            alt="mock backdrop"
            className="features__backdrop"
          />

          {/* NEW: viewport clamps movement */}
          <div className="features__viewport">
            <div
              className="features__slider"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="features__slide">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="features__mock"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="features__dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`features__dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div className="features__list">
        <h2 className="features__list-title">{slides[activeIndex].title}</h2>
        <p className="features__list-description">
          {slides[activeIndex].description}
        </p>
      </div>
    </section>
  );
}

export default Features;
