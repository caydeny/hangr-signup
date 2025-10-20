import { useState } from "react";
import './Features.css';

function Features() {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section className="features" id="features">
        <h1>Features.</h1>
        <p>Tap on a feature to learn more.</p>
        <div className="features__container">
          <img className="features__image" src="./mock_features.png" />
          <button type="button" className="invis-button" onClick={() => setActiveIndex(prev => prev === 0 ? null : 0)} />
          <button type="button" className="invis-button" onClick={() => setActiveIndex(prev => prev === 1 ? null : 1)} id="wardrobe" />
          <button type="button" className="invis-button" onClick={() => setActiveIndex(prev => prev === 2 ? null : 2)} id="like" />
          <button type="button" className="invis-button" onClick={() => setActiveIndex(prev => prev === 3 ? null : 3)} id="learn-more" />
        </div>
        <div className="features__list">
          <div className={`features__list-item ${activeIndex === 0 ? "active" : ""}`} id="dislike">
            <h2>1. Feature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <div className={`features__list-item ${activeIndex === 1 ? "active" : ""}`}>
            <h2>2. Feature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <div className={`features__list-item ${activeIndex === 2 ? "active" : ""}`}>
            <h2>3. Feature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
          <div className={`features__list-item ${activeIndex === 3 ? "active" : ""}`}>
            <h2>4. Feature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Features;