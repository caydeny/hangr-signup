import "./Privacy.css";

function Privacy() {
  return (
    <main className="privacy">
      <h1 className="privacy__header">Privacy Policy</h1>
      <p className="privacy__text">
        Hangr respects your privacy. This Privacy Policy explains how we collect,
        use, and protect your information.
      </p>

      <h2 className="privacy__subheader">Information We Collect</h2>
      <p className="privacy__text">
        We may collect basic information such as contact details and anonymous
        usage data to improve our platform.
      </p>

      <h2 className="privacy__subheader">How We Use Information</h2>
      <p className="privacy__text">
        Information is used solely to operate and improve the Hangr experience.
      </p>

      <h2 className="privacy__subheader">Third-Party Services</h2>
      <p className="privacy__text">
        We may use trusted third-party services for analytics or hosting.
      </p>

      <h2 className="privacy__subheader">Your Rights</h2>
      <p className="privacy__text">
        You may request access to or deletion of your data by contacting us.
      </p>

      <p className="privacy__text">
        Last updated: 2025
      </p>
    </main>
  );
}

export default Privacy;
