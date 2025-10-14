import { useState } from "react";
import "./AnimatedText.css";

function AnimatedText() {
  const words = ["Explore", "Uncover", "Connect"];
  const [index, setIndex] = useState(0);

  return (
    <h1 className="home__header">
      <span
        className="slide-text"
        onAnimationIteration={() =>
          setIndex((prev) => (prev + 1) % words.length)
        }
      >
        {words[index]}
      </span>
    </h1>
  );
}

export default AnimatedText;
