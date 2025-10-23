import { useState, useEffect } from "react";
import './Home.css';

function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://hangr-api.vercel.app/api/waitlist-count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Error fetching count:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("invalid");
      setTimeout(() => setStatus(""), 2500);
      return;
    }

    // simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    <>
      <section className="home">
        <h1 className="home__header">Explore</h1>
        <h2 className="home__subheader">Brands that fit your unique style</h2>
        <div className="home__background"></div>
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
          <p className="home__waitlisted-count">
            {count} people have signed up
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
