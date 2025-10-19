import './Features.css';

function Features() {

  return (
    <>
      <section className="features" id="features">
        <h1>Features.</h1>
        <p>Tap on a feature to learn more.</p>
        <img className="features__image" src="./mock_features.png" />
        <div className="features__list">
          <div className="features__list-item">
            <h2>1. Feature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <div className="features__list-item">
            <h2>2. Feature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <div className="features__list-item">
            <h2>3. Feature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <div className="features__list-item">
            <h2>4. Feature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Features;