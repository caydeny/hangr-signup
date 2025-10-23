import './Features.css';

function Features() {

  return (
    <>
      <section className="features" id="features">
        <h1 className="features__header">Features</h1>
        <img src="./backdrop.png" alt="mock backdrop" className="features__backdrop" />
        <img src="./mock.png" alt="mock" className="features__mock" />
        <div className="features__list">
          <h2 className="features__list-title">Like Button</h2>
          <p className="features__list-description">
            Swipe right or tap “Like” to refine your style — the more you like, the smarter your matches.
          </p>
        </div>
      </section>
    </>
  );
}
export default Features;