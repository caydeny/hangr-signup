import { useMemo, useRef, useState, useEffect } from "react";
import "./Features.css";

function Features() {
  const slides = useMemo(
    () => [
      {
        id: "like",
        steps: [
          {
            title: "Like to Train Your Feed",
            description:
              "Tap or swipe to Like outfits you love. Every like helps Hangr understand your style and improve future recommendations.",
            image: "/like_1.png",
          },
          {
            title: "Like to Train Your Feed",
            description:
              "The more you like, the faster your feed adapts—so new suggestions feel increasingly on-point.",
            image: "/like_2.png",
          },
        ],
      },
      {
        id: "dislike",
        steps: [
          {
            title: "Not Your Style?",
            description:
              "Tap or swipe to Dislike outfits that aren’t your vibe. This helps Hangr learn what to avoid.",
            image: "/dislike_1.png",
          },
          {
            title: "Not Your Style?",
            description:
              "Each dislike refines your feed, cutting down the noise so you see more styles you’d actually wear.",
            image: "/dislike_2.png",
          },
        ],
      },
      {
        id: "info",
        steps: [
          {
            title: "Learn More",
            description:
              "Tap Info to view brand details, materials, and links to shop or explore further.",
            image: "/info_1.png",
          },
          {
            title: "Learn More",
            description:
              "Get everything you need to know about an item or brand—without breaking your flow.",
            image: "/info_2.png",
          },
        ],
      },
      {
        id: "save",
        steps: [
          {
            title: "Build a Wardrobe",
            description:
              "Tap the star to save looks you love and keep them in your personal wardrobe.",
            image: "/save_1.png",
          },
          {
            title: "Build a Wardrobe",
            description:
              "Your saved tab becomes a curated shortlist for comparing and revisiting styles.",
            image: "/save_2.png",
          },
          {
            title: "Build a Wardrobe",
            description:
              "Save brands you love to get even more recommendations that match your aesthetic.",
            image: "/save_3.png",
          },
        ],
      },
      {
        id: "search",
        steps: [
          {
            title: "Find by Photo",
            description:
              "Can’t find a clothing item online? Take a photo to discover similar or identical products.",
            image: "/search_1.png",
          },
          {
            title: "Find by Photo",
            description:
              "Scroll through results to explore matching styles and brands.",
            image: "/search_2.png",
          },
          {
            title: "Find by Photo",
            description:
              "Tap to move through steps, then tap any item to like, dislike, save, or learn more.",
            image: "/search_3.png",
          },
        ],
      },
    ],
    []
  );

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeStepByFeature, setActiveStepByFeature] = useState(() =>
    Object.fromEntries(slides.map((f) => [f.id, 0]))
  );

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);
  const [renderedFeatureIndex, setRenderedFeatureIndex] = useState(0);
  const [freezeLayer, setFreezeLayer] = useState(false);
  const [hasTappedOnce, setHasTappedOnce] = useState(false);

  const touchRef = useRef({ x: 0, y: 0, moved: false });
  const commitRef = useRef(null);
  const rafRef = useRef(null);
  const ignoreClickRef = useRef(false);

  useEffect(() => {
    return () => {
      clearTimeout(commitRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const activeFeature = slides[activeFeatureIndex];
  const activeStepIndex = activeStepByFeature[activeFeature.id];

  const renderedFeature = slides[renderedFeatureIndex];
  const renderedStepIndex = activeStepByFeature[renderedFeature.id];

  const displayFeatureIndex = isTransitioning
    ? activeFeatureIndex
    : renderedFeatureIndex;

  const displayFeature = slides[displayFeatureIndex];
  const displayStepIndex = activeStepByFeature[displayFeature.id];
  const displayStep = displayFeature.steps[displayStepIndex];

  const nextStep = () => {
    if (isTransitioning) return;
    setHasTappedOnce(true);
    setActiveStepByFeature((prev) => {
      const curr = prev[renderedFeature.id];
      const total = renderedFeature.steps.length;
      return { ...prev, [renderedFeature.id]: (curr + 1) % total };
    });
  };

  const goFeature = (nextIndex, dir) => {
    if (isTransitioning) return;
    if (nextIndex === renderedFeatureIndex) return;

    setHasTappedOnce(true);
    setDirection(dir);

    clearTimeout(commitRef.current);
    cancelAnimationFrame(rafRef.current);

    setIsTransitioning(true);
    setActiveFeatureIndex(nextIndex);

    commitRef.current = setTimeout(() => {
      setFreezeLayer(true);
      setRenderedFeatureIndex(nextIndex);

      rafRef.current = requestAnimationFrame(() => {
        setIsTransitioning(false);
        rafRef.current = requestAnimationFrame(() => setFreezeLayer(false));
      });
    }, 520);
  };

  const prevFeature = () => {
    setHasTappedOnce(true);
    const next = (renderedFeatureIndex - 1 + slides.length) % slides.length;
    goFeature(next, -1);
  };

  const nextFeature = () => {
    setHasTappedOnce(true);
    const next = (renderedFeatureIndex + 1) % slides.length;
    goFeature(next, 1);
  };

  const onTouchStart = (e) => {
    if (isTransitioning) return;
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY, moved: false };
  };

  const onTouchMove = (e) => {
    if (isTransitioning) return;
    const t = e.touches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;
    if (Math.abs(dx) > 12 || Math.abs(dy) > 12) touchRef.current.moved = true;
  };

  const onTouchEnd = (e) => {
    if (isTransitioning) return;

    ignoreClickRef.current = true;
    setTimeout(() => {
      ignoreClickRef.current = false;
    }, 450);

    const t = e.changedTouches[0];
    const dx = t.clientX - touchRef.current.x;
    const dy = t.clientY - touchRef.current.y;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      const dir = dx < 0 ? 1 : -1;
      const next = (renderedFeatureIndex + dir + slides.length) % slides.length;
      goFeature(next, dir);
      return;
    }

    if (!touchRef.current.moved) nextStep();
  };

  const onDotClick = (i) => {
    setHasTappedOnce(true);
    const dir = i > renderedFeatureIndex ? 1 : -1;
    goFeature(i, dir);
  };

  const showTapHint = !hasTappedOnce && displayStepIndex === 0;

  return (
    <section className="features" id="features">
      <h1 className="features__header">Features</h1>

      <div className="features__swipe-area">
        <div
          className="features__mock-wrapper"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onClick={() => {
            if (ignoreClickRef.current) return;
            nextStep();
          }}
        >
          <button
            type="button"
            className="features__nav features__nav--left"
            onClick={(e) => {
              e.stopPropagation();
              prevFeature();
            }}
            aria-label="Previous feature"
            disabled={isTransitioning}
          >
            <span className="features__nav-icon" aria-hidden="true">
              ‹
            </span>
          </button>

          <button
            type="button"
            className="features__nav features__nav--right"
            onClick={(e) => {
              e.stopPropagation();
              nextFeature();
            }}
            aria-label="Next feature"
            disabled={isTransitioning}
          >
            <span className="features__nav-icon" aria-hidden="true">
              ›
            </span>
          </button>

          <img
            src="/backdrop.png"
            alt="mock backdrop"
            className="features__backdrop"
            draggable={false}
          />

          <div className="features__viewport">
            <div className="features__feature-stage">
              <div
                className={`features__feature-layer is-current ${
                  freezeLayer ? "no-transition" : ""
                } ${isTransitioning ? "is-exiting" : ""}`}
                style={{ "--dir": direction }}
              >
                <div className="features__fade-stack">
                  {renderedFeature.steps.map((step, idx) => (
                    <img
                      key={step.image}
                      src={step.image}
                      alt=""
                      className={`features__fade-img ${
                        idx === renderedStepIndex ? "is-active" : ""
                      }`}
                      draggable={false}
                    />
                  ))}
                </div>
              </div>

              {isTransitioning && (
                <div
                  className="features__feature-layer is-next"
                  style={{ "--dir": direction }}
                >
                  <div className="features__fade-stack">
                    {activeFeature.steps.map((step, idx) => (
                      <img
                        key={step.image}
                        src={step.image}
                        alt=""
                        className={`features__fade-img ${
                          idx === activeStepIndex ? "is-active" : ""
                        }`}
                        draggable={false}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="features__dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`features__dot ${
              i === displayFeatureIndex ? "active" : ""
            }`}
            onClick={() => onDotClick(i)}
          />
        ))}
      </div>

      <div className="features__list">
        <h2 className="features__list-title">{displayStep.title}</h2>
        <p className="features__list-description">{displayStep.description}</p>

        {showTapHint && (
          <p className="features__tap-hint">
            Tap to learn more, swipe to continue
          </p>
        )}

        <p className="features__step-indicator">
          {displayStepIndex + 1} / {displayFeature.steps.length}
        </p>
      </div>
    </section>
  );
}

export default Features;
