import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const title = ["Explore", "Uncover", "Connect"];

  const [index, setIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://hangr-api.vercel.app/api/waitlist-count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setStatus("invalid");
      setTimeout(() => setStatus(""), 2500);
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus("invalid-format");
      setTimeout(() => setStatus(""), 2500);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("https://api.useplunk.com/v1/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_PLUNK_PUBLIC_KEY}`,
        },
        body: JSON.stringify({ event: "waitlist_signup", email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");

        fetch("https://hangr-api.vercel.app/api/waitlist-count")
          .then((res) => res.json())
          .then((data) => setCount(data.count))
          .catch(() => {});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 2500);
  };

  const getButtonText = () => {
    switch (status) {
      case "loading":
        return "Joining...";
      case "success":
        return "Successful!";
      case "invalid":
        return "Enter an email";
      case "invalid-format":
        return "Invalid format";
      case "error":
        return "Error, try again";
      default:
        return "Join waitlist";
    }
  };

  return (
    <section className="home">
      <span
        className="home__header"
        onAnimationIteration={() =>
          setIndex((prev) => (prev + 1) % title.length)
        }
      >
        {title[index]}
      </span>

      <h2 className="home__subheader">Brands that fit your unique style</h2>

      <div className="home__background-stack">
        <div
          className="home__background-row scroll-right"
          style={{
            backgroundImage: "url(/back1.svg)",
            // set this to the exact tile width that used to work for you:
            "--tile": "392px",
          }}
        />
        <div
          className="home__background-row scroll-left"
          style={{
            backgroundImage: "url(/back2.svg)",
            "--tile": "392px",
          }}
        />
        <div
          className="home__background-row scroll-right"
          style={{
            backgroundImage: "url(/back3.svg)",
            "--tile": "392px",
          }}
        />
      </div>

      <img src="./mock.png" alt="" className="home__mock" />

      <form className="home__form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="home__form-input"
          required
        />
        <button
          className={`home__form-button ${status}`}
          disabled={status === "loading"}
        >
          {getButtonText()}
        </button>
      </form>

      <div className="home__waitlisted">
        <p className="home__waitlisted-count">{count} people have signed up</p>
      </div>
    </section>
  );
}

export default Home;
