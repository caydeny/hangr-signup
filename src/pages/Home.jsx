import './Home.css'

function Home() {

  return (
    <>
      <section className="home">
        <img className="home__logo" src="/logo.svg"/>
        <h1 className="home__header">Explore</h1>
        <h2 className="home__subheader">Brands that fit your unique style</h2>
        <div className="home__status">
          <div className="home__status-icon"></div>
          <p className="home__status-text">Currently in development</p>
        </div>
        <div className="home__waitlist">
          <h3 className="home__waitlist-header">Reserve your spot on the waitlist</h3>
          <input
            className="home__waitlist-input"
            type="text"
            placeholder="Enter email address"
          />
          <button className="home__waitlist-button">Join waitlist</button>
        </div>
      </section>
    </>
  );
}
export default Home;