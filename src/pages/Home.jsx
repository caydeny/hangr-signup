import { useState, useEffect } from "react";
import "./Home.css";
import AnimatedText from "../components/AnimatedText";

function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(null);

  useEffect(() => {
  fetch("https://hangr-api.vercel.app/api/waitlist-count")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched count:", data);
      setCount(data.count);
    })
    .catch((err) => console.error("Error fetching count:", err));
  }, []);


  const handleSubmit = async () => {
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("https://api.useplunk.com/v1/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_PLUNK_PUBLIC_KEY}`,
        },
        body: JSON.stringify({
          event: "waitlist_signup",
          email,
        }),
      });

  if (res.ok) {
    setStatus("success");
    setEmail("");
    fetch("https://hangr-api.vercel.app/api/waitlist-count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Error fetching count:", err));
  } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="home">
      <img className="home__logo" src="/logo.svg" alt="Hangr logo" />
      <AnimatedText />
      <h2 className="home__subheader">Brands that fit your unique style</h2>

      <div className="home__status">
        <div className="home__status-icon"></div>
        <p className="home__status-text">Currently in development</p>
      </div>

      <div className="home__waitlist">
        <h3 className="home__waitlist-header">
          Reserve your spot on the waitlist
        </h3>

        <input
          className="home__waitlist-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
        />

        <button
          className="home__waitlist-button"
          onClick={handleSubmit}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Joining..." : "Join waitlist"}
        </button>
      </div>
      <div className="home__signup">
        <img className="home__signup-users"src="./users.svg" alt="pfps"/>
        <p className="home__signup-count">
          {count} people have signed up
        </p>
      </div>
    </section>
  );
}
export default Home;